import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.t21pc252c {
  fill: currentColor;
  d: path("M216 34h-48a6 6 0 0 0 0 12h33.52L168 79.52l-19.76-19.76a6 6 0 1 0-8.48 8.49L159.52 88l-18.46 18.46a69.94 69.94 0 1 0 8.49 8.48L168 96.5l19.76 19.76a6 6 0 0 0 8.48-8.49L176.48 88L210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-79 167a58 58 0 1 1 17-41a58 58 0 0 1-17 41");
}
</style><path class="t21pc252c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:gender-transgender-light"} {...others} />);
}

export default Component;
