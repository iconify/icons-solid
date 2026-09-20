import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.niq6rbbak {
  fill: currentColor;
  d: path("M216 44H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h62.75l14.83 26a12 12 0 0 0 20.84 0l14.83-26H216a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4h-65.07a4 4 0 0 0-3.47 2l-16 28a4 4 0 0 1-6.94 0l-16-28a4 4 0 0 0-3.47-2H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z");
}
</style><path class="niq6rbbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chat-centered-thin"} {...others} />);
}

export default Component;
