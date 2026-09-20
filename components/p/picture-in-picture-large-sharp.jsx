import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ra_odxw9j {
  fill: currentColor;
  d: path("M6 16V6h12v10zm-4 4v-2h18V4h2v16z");
}
</style><path class="ra_odxw9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-large-sharp"} {...others} />);
}

export default Component;
