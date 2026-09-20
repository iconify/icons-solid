import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xj557mbzs {
  fill: currentColor;
  d: path("m3.039 20.23l2.534-2.534l-.73-.73v-1.132l5.45-5.45l4.015 4.016l-5.45 5.45H7.727l-.77-.77l-1.15 1.15zm7.967-10.559l6.086-6.086L21.108 7.6l-6.087 6.087z");
}
</style><path class="xj557mbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ink-highlighter-sharp"} {...others} />);
}

export default Component;
