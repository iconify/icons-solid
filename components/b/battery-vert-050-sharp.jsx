import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qzxd0nn_c {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18H7Zm2-9h6V6H9v7Z");
}
</style><path class="qzxd0nn_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-vert-050-sharp"} {...others} />);
}

export default Component;
