import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ixsc8gb_e {
  fill: currentColor;
  d: path("M17 16V7H8V5h11v11zm-5 5v-9H3v-2h11v11z");
}
</style><path class="ixsc8gb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:more-up"} {...others} />);
}

export default Component;
