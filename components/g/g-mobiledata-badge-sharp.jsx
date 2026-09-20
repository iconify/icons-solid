import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xs7bqrbpv {
  fill: currentColor;
  d: path("M8 17h8v-6h-4v2h2v2h-4V9h6V7H8zm-5 4V3h18v18z");
}
</style><path class="xs7bqrbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:g-mobiledata-badge-sharp"} {...others} />);
}

export default Component;
