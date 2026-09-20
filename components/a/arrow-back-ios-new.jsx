import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zw4pcbblw {
  fill: currentColor;
  d: path("M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z");
}
</style><path class="zw4pcbblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-back-ios-new"} {...others} />);
}

export default Component;
