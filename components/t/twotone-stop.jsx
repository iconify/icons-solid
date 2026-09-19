import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sk8j2ybdw {
  fill: currentColor;
  d: path("M6 18h12V6H6zM8 8h8v8H8z");
}

.wjz_w7bch {
  fill: currentColor;
  d: path("M8 8h8v8H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="wjz_w7bch"/><path class="sk8j2ybdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-stop"} {...others} />);
}

export default Component;
