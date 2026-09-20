import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nj38kxdbi {
  fill: currentColor;
  d: path("M5 15h12V7H5zm-3 5V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="nj38kxdbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:magnification-large-outline-sharp"} {...others} />);
}

export default Component;
