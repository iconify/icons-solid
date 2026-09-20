import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nwmean91e {
  fill: currentColor;
  d: path("M246 180a34 34 0 0 1-58.29 23.79a6 6 0 0 1 8.58-8.39A22 22 0 1 0 212 158a6 6 0 0 1-4.92-9.44l21.4-30.56H192a6 6 0 0 1 0-12h48a6 6 0 0 1 4.91 9.44l-22.52 32.18A34.06 34.06 0 0 1 246 180M144 50a6 6 0 0 0-6 6v54H46V56a6 6 0 0 0-12 0v120a6 6 0 0 0 12 0v-54h92v54a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6");
}
</style><path class="nwmean91e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-h-three-light"} {...others} />);
}

export default Component;
