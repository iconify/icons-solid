import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pz6kgrblf {
  fill: currentColor;
  d: path("m12.874 1.514l10 18A1 1 0 0 1 22 21H2a1 1 0 0 1-.874-1.486l10-18a1 1 0 0 1 1.748 0M13 9a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Zm-1 6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="pz6kgrblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:triangle-warning-fill-sharp"} {...others} />);
}

export default Component;
