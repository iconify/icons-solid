import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jyhtf06km {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.373 6.873Q1.25 8.997 1.25 12t2.123 5.127T8.5 19.25q1.932 0 3.5-.879q1.568.879 3.5.879q3.003 0 5.127-2.123T22.75 12t-2.123-5.127Q18.503 4.75 15.5 4.75q-1.932 0-3.5.879q-1.568-.879-3.5-.879q-3.003 0-5.127 2.123");
}
</style><path class="jyhtf06km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:venn-diagram"} {...others} />);
}

export default Component;
