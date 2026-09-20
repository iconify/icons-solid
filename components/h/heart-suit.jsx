import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.wvyw_rbfl {
  fill: var(--svg-color--be1931, #be1931);
  d: path("M2.067 11.319C2.067 2.521 14.251-.74 18 9.445C21.749-.741 33.933 2.52 33.933 11.319C33.933 20.879 18 33 18 33S2.067 20.879 2.067 11.319");
}
</style><path class="wvyw_rbfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:heart-suit"} {...others} />);
}

export default Component;
