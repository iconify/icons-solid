import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tzv41fyap {
  fill: currentColor;
  d: path("M246.66 123.56L201 55.13A15.94 15.94 0 0 0 187.72 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h147.72a16 16 0 0 0 13.28-7.12l45.63-68.44a8 8 0 0 0 .03-8.88");
}
</style><path class="tzv41fyap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tag-simple-fill"} {...others} />);
}

export default Component;
