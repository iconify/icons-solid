import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p8n6gwang {
  fill: var(--svg-color--ff1e43, #ff1e43);
  d: path("M8.143 3H4.607l10.286 18h4.5V3h-3.214v13.822z");
}
</style><path class="p8n6gwang"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:vib"} {...others} />);
}

export default Component;
