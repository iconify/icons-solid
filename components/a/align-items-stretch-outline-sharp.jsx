import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo4pait0c {
  fill: currentColor;
  d: path("M7.5 17.5v-11h2v11zm7 0v-11h2v11zM3 4V3h18v1zm0 17v-1h18v1z");
}
</style><path class="bo4pait0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-items-stretch-outline-sharp"} {...others} />);
}

export default Component;
