import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g96jlr60o {
  fill: currentColor;
  d: path("M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2 20h-4v-1h4zm3-3H7V4h10z");
}

.lb525pb0g {
  fill: currentColor;
  d: path("M7 4h10v14H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="lb525pb0g"/><path class="g96jlr60o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-phone-android"} {...others} />);
}

export default Component;
