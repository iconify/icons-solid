import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kg3hqdb5t {
  fill: currentColor;
  d: path("M1 21V3h22v18zm2-2h18V5H3zm16-8h-3v2h1v2h-3V9h5V7h-7v10h7zM5 17h6v-6H7V9h4V7H5v6h4v2H5zm-2 2V5z");
}
</style><path class="kg3hqdb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:5g-mobiledata-badge-outline-sharp"} {...others} />);
}

export default Component;
