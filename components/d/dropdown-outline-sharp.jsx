import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fe3m8k5zi {
  fill: currentColor;
  d: path("M12 12h6V6h-6zm-8 8V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="fe3m8k5zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dropdown-outline-sharp"} {...others} />);
}

export default Component;
