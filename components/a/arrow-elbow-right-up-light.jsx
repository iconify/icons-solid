import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qax9cwbfa {
  fill: currentColor;
  d: path("M220.24 100.24a6 6 0 0 1-8.48 0L174 62.49V192a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h138V62.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 0 1 0 8.48");
}
</style><path class="qax9cwbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-right-up-light"} {...others} />);
}

export default Component;
