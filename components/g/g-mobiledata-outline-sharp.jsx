import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gu_wdxieb {
  fill: currentColor;
  d: path("M7 17V7h9v2H9v6h5v-2h-2v-2h4v6z");
}
</style><path class="gu_wdxieb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:g-mobiledata-outline-sharp"} {...others} />);
}

export default Component;
