import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iish576ic {
  fill: currentColor;
  d: path("M8.293 12.707a.999.999 0 1 1 1.414-1.414L11 12.586V3a1 1 0 0 1 2 0v9.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0ZM5 8H4v12h16V8h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2");
}
</style><path class="iish576ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:import-fill-sharp"} {...others} />);
}

export default Component;
