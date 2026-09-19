import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eol4_l0on {
  fill: currentColor;
  d: path("M17 7L2 22h15z");
}

.mnumfnbbo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M2 22h20V2z");
}
</style><path class="mnumfnbbo"/><path class="eol4_l0on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-signal-cellular-3-bar"} {...others} />);
}

export default Component;
