import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gky0jhb1i {
  fill: var(--svg-color--2f355b, #2f355b);
  d: path("m11.8 5.912l-4.317 9.53h3.209l4.356-9.53h4.041L21 18.09h-3.527l-.203-2.647h-3.324l-.902 2.647H3L8.456 5.912zm2.788 7.941h2.402l-.435-5.823z");
}
</style><path class="gky0jhb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:la"} {...others} />);
}

export default Component;
