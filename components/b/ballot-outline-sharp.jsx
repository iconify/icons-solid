import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zy053ufzu {
  fill: currentColor;
  d: path("M12 10h5V8h-5zm0 6h5v-2h-5zm-5-5h4V7H7zm0 6h4v-4H7zm-4 4V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="zy053ufzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ballot-outline-sharp"} {...others} />);
}

export default Component;
