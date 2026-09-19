import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anjhu2okj {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2-6H6v-2h12zm-4 4H6v-2h8z");
}

.cqlhzm2ve {
  fill: currentColor;
  d: path("M9.17 6H4v12h16V8h-8.83z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="cqlhzm2ve"/><path class="anjhu2okj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-source"} {...others} />);
}

export default Component;
