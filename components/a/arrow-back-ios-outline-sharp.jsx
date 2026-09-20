import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2u-dxewg {
  fill: currentColor;
  d: path("M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z");
}
</style><path class="z2u-dxewg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-back-ios-outline-sharp"} {...others} />);
}

export default Component;
