import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v4mfwtb9a {
  fill: var(--svg-color--fff, #fff);
  d: path("M11.505 3L7.318 5.455l4.187 2.455l4.262-2.455zm.753 13.09V21l5.673-3.242v-4.91zm4.126-9.098v4.91l-4.126 2.455v-4.91zm-10.315 4.91l4.642 2.455v-4.91L6.069 6.993zm0 6.643L10.711 21v-4.92l-4.642-2.445z");
}
</style><path class="v4mfwtb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:bnt"} {...others} />);
}

export default Component;
