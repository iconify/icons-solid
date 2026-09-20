import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a60dc9bnn {
  fill: currentColor;
  d: path("M1 20V4h22v16zm5-2h12V6H6zm2-6.5V10h8v1.5zm1 3V13h6v1.5z");
}
</style><path class="a60dc9bnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:aod-tablet-sharp"} {...others} />);
}

export default Component;
