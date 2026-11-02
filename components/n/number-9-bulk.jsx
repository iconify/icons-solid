import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.op1oeqo0a {
  fill: currentColor;
  d: path("M15 17v-5.999A5 5 0 1 1 17 7v10a5 5 0 0 1-10 0a1 1 0 0 1 2 0a3 3 0 1 0 6 0m0-10a3 3 0 1 0-6 0a3 3 0 0 0 6 0");
}
</style><path class="op1oeqo0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:number-9-bulk"} {...others} />);
}

export default Component;
