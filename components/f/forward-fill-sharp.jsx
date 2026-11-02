import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h44a4x9ri {
  fill: currentColor;
  d: path("M18.586 10H4v8h9a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h15.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="h44a4x9ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:forward-fill-sharp"} {...others} />);
}

export default Component;
