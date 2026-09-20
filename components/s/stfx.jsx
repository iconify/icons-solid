import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a2nf30btz {
  fill: var(--svg-color--00dd73, #00dd73);
  d: path("m12 4.969l9 14.062H3z");
}
</style><path class="a2nf30btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:stfx"} {...others} />);
}

export default Component;
