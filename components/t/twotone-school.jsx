import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afjcflbuo {
  fill: currentColor;
  d: path("M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm5 12.99l-5 2.73l-5-2.73v-3.72L12 15l5-2.73zm-5-3.27L5.18 9L12 5.28L18.82 9z");
}

.yov-gnoai {
  fill: currentColor;
  d: path("M7 12.27v3.72l5 2.73l5-2.73v-3.72L12 15zM5.18 9L12 12.72L18.82 9L12 5.28z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="yov-gnoai"/><path class="afjcflbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-school"} {...others} />);
}

export default Component;
