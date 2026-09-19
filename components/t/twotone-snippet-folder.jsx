import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqlhzm2ve {
  fill: currentColor;
  d: path("M9.17 6H4v12h16V8h-8.83z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xopogkwmn {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2.5-5.88v3.38h-3v-5h1.38zM16.5 9H13v8h6v-5.5z");
}
</style><path class="cqlhzm2ve"/><path class="xopogkwmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-snippet-folder"} {...others} />);
}

export default Component;
