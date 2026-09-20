import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rera8xt7n {
  fill: currentColor;
  d: path("M2 21V6h5V2h10v4h5v15zM9 6h6V4H9zM4 17h16v-3H4z");
}
</style><path class="rera8xt7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:card-travel-sharp"} {...others} />);
}

export default Component;
