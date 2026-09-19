import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0lo54m7e {
  fill: currentColor;
  d: path("M10 5h12v2H10zm0 12h12v2H10zm-8.5 0L5 20.5L8.5 17H6V7h2.5L5 3.5L1.5 7H4v10zm8.5-6h12v2H10z");
}
</style><path class="d0lo54m7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-format-line-spacing"} {...others} />);
}

export default Component;
