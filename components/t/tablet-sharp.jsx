import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sebyljbld {
  fill: currentColor;
  d: path("M1 20V4h22v16zm5-2h12V6H6z");
}
</style><path class="sebyljbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tablet-sharp"} {...others} />);
}

export default Component;
