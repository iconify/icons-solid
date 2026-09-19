import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxiwfu_6h {
  fill: currentColor;
  d: path("M6 21h12V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z");
}
</style><path class="cxiwfu_6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-delete"} {...others} />);
}

export default Component;
