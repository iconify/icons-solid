import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ja25kuw2q {
  fill: currentColor;
  d: path("M220 192a4 4 0 0 1-8 0c0-81.61-66.39-148-148-148a4 4 0 0 1 0-8c86 0 156 70 156 156M64 108a4 4 0 0 0 0 8a76.08 76.08 0 0 1 76 76a4 4 0 0 0 8 0a84.09 84.09 0 0 0-84-84m4 72a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="ja25kuw2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rss-simple-thin"} {...others} />);
}

export default Component;
