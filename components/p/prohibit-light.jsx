import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.eyuqbyjsv {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m90 102a89.6 89.6 0 0 1-22.29 59.22L68.78 60.29A89.95 89.95 0 0 1 218 128m-180 0a89.6 89.6 0 0 1 22.29-59.22l126.93 126.93A89.95 89.95 0 0 1 38 128");
}
</style><path class="eyuqbyjsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:prohibit-light"} {...others} />);
}

export default Component;
