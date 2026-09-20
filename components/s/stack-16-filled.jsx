import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.q51y3sqsw {
  fill: currentColor;
  d: path("M2.5 2A1.5 1.5 0 0 0 1 3.5v5A1.5 1.5 0 0 0 2.5 10h7A1.5 1.5 0 0 0 11 8.5v-5A1.5 1.5 0 0 0 9.5 2zm2.585 11A1.5 1.5 0 0 0 6.5 14h3A5.5 5.5 0 0 0 15 8.5v-1a1.5 1.5 0 0 0-1-1.415V8.5A4.5 4.5 0 0 1 9.5 13zM4.5 12a1.5 1.5 0 0 1-1.415-1H9.5A2.5 2.5 0 0 0 12 8.5V4.085A1.5 1.5 0 0 1 13 5.5v3A3.5 3.5 0 0 1 9.5 12z");
}
</style><path class="q51y3sqsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:stack-16-filled"} {...others} />);
}

export default Component;
