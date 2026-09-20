import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ald56hylg {
  fill: currentColor;
  d: path("M3 19V5h18v14zm8.308-6.308H19V7h-7.692z");
}
</style><path class="ald56hylg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-sharp"} {...others} />);
}

export default Component;
