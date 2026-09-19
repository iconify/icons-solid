import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sosfyby5i {
  fill: currentColor;
  d: path("M19 5h-7v6l7 8zm-7 14v-8l-7 8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.vyqcg_xfn {
  fill: currentColor;
  d: path("M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-9 0H5l7-8V5h7v14l-7-8z");
}
</style><path class="sosfyby5i"/><path class="vyqcg_xfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-filter-b-and-w"} {...others} />);
}

export default Component;
