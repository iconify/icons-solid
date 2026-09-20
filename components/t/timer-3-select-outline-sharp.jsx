import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ceu0jq11e {
  fill: currentColor;
  d: path("M4.885 18.116v-1.231h6v-4.27h-6v-1.23h6v-4.27h-6v-1.23h7.23v5.5L11.5 12l.616.616v5.5zm10.23 0v-1h4v-2h-4v-4h5v1h-4v2h4v4z");
}
</style><path class="ceu0jq11e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:timer-3-select-outline-sharp"} {...others} />);
}

export default Component;
