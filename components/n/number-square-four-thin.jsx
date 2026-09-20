import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o4zofyheb {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-52-60h-12V80a4 4 0 0 0-7.16-2.46l-56 72A4 4 0 0 0 88 156h52v20a4 4 0 0 0 8 0v-20h12a4 4 0 0 0 0-8m-20 0H96.18L140 91.66Z");
}
</style><path class="o4zofyheb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-square-four-thin"} {...others} />);
}

export default Component;
