import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k0c9fnbbv {
  fill: currentColor;
  d: path("M6 21v-2h5v-5L3 5V3h18v2l-8 9v5h5v2zM7.45 7h9.1l1.8-2H5.65z");
}
</style><path class="k0c9fnbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:local-bar"} {...others} />);
}

export default Component;
