import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zy2jsybir {
  fill: currentColor;
  d: path("M184 162h-18V48a6 6 0 0 0-10.69-3.75l-96 120A6 6 0 0 0 64 174h90v34a6 6 0 0 0 12 0v-34h18a6 6 0 0 0 0-12m-30 0H76.48L154 65.1Z");
}
</style><path class="zy2jsybir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-four-light"} {...others} />);
}

export default Component;
