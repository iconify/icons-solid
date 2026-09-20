import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2iqzxb8e {
  fill: currentColor;
  d: path("M5 19h14V5H5zm-1 1V4h16v16zm3.692-7.384v-1.231h1.231v1.23zm3.692 3.692v-1.231h1.231v1.23zm0-3.692v-1.231h1.231v1.23zm0-3.693v-1.23h1.231v1.23zm3.693 3.693v-1.231h1.23v1.23z");
}
</style><path class="g2iqzxb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:border-outer-outline-sharp"} {...others} />);
}

export default Component;
