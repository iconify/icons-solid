import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qu-0vpold {
  fill: var(--svg-color--277fe3, #277fe3);
  d: path("M12 10.105V3L6.316 13.895H12V21l5.684-10.895z");
}
</style><path class="qu-0vpold"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:strk"} {...others} />);
}

export default Component;
