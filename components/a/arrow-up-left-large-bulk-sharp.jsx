import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o7b8kgbbx {
  fill: currentColor;
  d: path("m8.414 7l10.293 10.293a.999.999 0 1 1-1.414 1.414L7 8.414V14a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2Z");
}
</style><path class="o7b8kgbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-up-left-large-bulk-sharp"} {...others} />);
}

export default Component;
