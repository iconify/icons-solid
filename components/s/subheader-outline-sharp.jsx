import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fm16020hs {
  fill: currentColor;
  d: path("M6.616 9.192h8v-2h-8zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="fm16020hs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:subheader-outline-sharp"} {...others} />);
}

export default Component;
