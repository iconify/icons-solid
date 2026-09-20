import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ulj2kkb_p {
  fill: currentColor;
  d: path("M170.27 117.21A40 40 0 0 0 148 44H80a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h80a44 44 0 0 0 10.27-86.79M84 52h64a32 32 0 0 1 0 64H84Zm76 144H84v-72h76a36 36 0 0 1 0 72");
}
</style><path class="ulj2kkb_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-b-thin"} {...others} />);
}

export default Component;
