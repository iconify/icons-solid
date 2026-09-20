import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.t32hj4c4p {
  fill: currentColor;
  d: path("M216 152a8 8 0 0 1-8 8h-72v52.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 212.69V160H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8M48 112h160a8 8 0 0 0 0-16h-72V43.31l18.34 18.35a8 8 0 0 0 11.32-11.32l-32-32a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L120 43.31V96H48a8 8 0 0 0 0 16");
}
</style><path class="t32hj4c4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:split-vertical"} {...others} />);
}

export default Component;
