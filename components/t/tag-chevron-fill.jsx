import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g9a264b6z {
  fill: currentColor;
  d: path("M246.66 132.44L201 200.88a16 16 0 0 1-13.28 7.12H32a8 8 0 0 1-6.66-12.44L70.39 128l-45-67.56A8 8 0 0 1 32 48h155.72A16 16 0 0 1 201 55.12l45.63 68.44a8 8 0 0 1 .03 8.88");
}
</style><path class="g9a264b6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tag-chevron-fill"} {...others} />);
}

export default Component;
