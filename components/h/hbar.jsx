import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n6s0unb4j {
  fill: var(--svg-color--fff, #fff);
  d: path("M19.875 21h-2.813v-5.063H6.937V21H4.125V3h2.812v5.062h10.125V3h2.813zM6.937 13.125h10.125v-2.25H6.937z");
}
</style><path class="n6s0unb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:hbar"} {...others} />);
}

export default Component;
