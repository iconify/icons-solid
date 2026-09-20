import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z8rar1fhy {
  fill: currentColor;
  d: path("M216 48a8 8 0 0 1-8 8h-16v152a8 8 0 0 1-16 0V56h-24v152a8 8 0 0 1-16 0v-40H96a64 64 0 0 1 0-128h112a8 8 0 0 1 8 8");
}
</style><path class="z8rar1fhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:paragraph-fill"} {...others} />);
}

export default Component;
