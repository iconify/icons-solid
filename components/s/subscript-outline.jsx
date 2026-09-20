import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qvx709b0n {
  fill: currentColor;
  d: path("M19 20v-2q0-.425.288-.712T20 17h2v-1h-3v-1h3q.425 0 .713.288T23 16v1q0 .425-.288.713T22 18h-2v1h3v1zM5.875 18l4.625-7.275L6.2 4h2.65l3.1 5h.1l3.075-5H17.8l-4.325 6.725L18.125 18H15.45l-3.4-5.425h-.1L8.55 18z");
}
</style><path class="qvx709b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:subscript-outline"} {...others} />);
}

export default Component;
