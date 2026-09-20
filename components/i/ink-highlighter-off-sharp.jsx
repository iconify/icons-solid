import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jjlv7pr_s {
  fill: currentColor;
  d: path("m15.779 12.935l-4.021-4.021l5.334-5.33L21.108 7.6zm3.983 8.242l-6.116-6.115l-4.788 4.788H7.727l-.77-.77l-1.15 1.15H3.04l2.534-2.534l-.73-.73v-1.132l4.788-4.788l-6.808-6.808l.714-.713l16.938 16.938z");
}
</style><path class="jjlv7pr_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ink-highlighter-off-sharp"} {...others} />);
}

export default Component;
