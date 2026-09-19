import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9anj7b8g {
  fill: currentColor;
  d: path("M5 5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1m2.41 9H9v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 7.7a.996.996 0 0 0-1.41 0l-4.59 4.59c-.63.63-.19 1.71.7 1.71");
}
</style><path class="w9anj7b8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-publish"} {...others} />);
}

export default Component;
