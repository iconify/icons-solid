import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d-kpsibpj {
  fill: currentColor;
  d: path("M240 208h-8V72a8 8 0 0 0-8-8h-40V40a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-8 8v104h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M80 176H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m64 64h-32v-40h32Zm-8-64h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m56 96h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16");
}
</style><path class="d-kpsibpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:building-apartment-fill"} {...others} />);
}

export default Component;
