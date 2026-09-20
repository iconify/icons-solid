import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tk4bf7bon {
  fill: currentColor;
  d: path("M4 21v-2H2V4h20v15h-2v2h-1l-.65-2H5.675L5 21zm0-4h16V6H4zm8-5.5");
}
</style><path class="tk4bf7bon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tv-gen-outline-sharp"} {...others} />);
}

export default Component;
