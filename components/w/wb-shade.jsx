import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i7-ympr0s {
  fill: currentColor;
  d: path("M19.5 20L14 14.5V12l8 8zM14 20v-3l3 3zM4 20V10H2l6-6l6 6h-2v10zm3-6h2v-4H7z");
}
</style><path class="i7-ympr0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wb-shade"} {...others} />);
}

export default Component;
