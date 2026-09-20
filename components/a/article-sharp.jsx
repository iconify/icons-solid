import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rkbpaqb2o {
  fill: currentColor;
  d: path("M7 17h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zM3 21V3h18v18z");
}
</style><path class="rkbpaqb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:article-sharp"} {...others} />);
}

export default Component;
