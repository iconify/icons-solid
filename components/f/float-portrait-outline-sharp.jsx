import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xc4__ubpu {
  fill: currentColor;
  d: path("M4 22V2h16v11h-2V4H6v16h7v2Zm11 0v-7h5v7Zm-3-10Z");
}
</style><path class="xc4__ubpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:float-portrait-outline-sharp"} {...others} />);
}

export default Component;
