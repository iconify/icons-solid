import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xji8wacnw {
  fill: currentColor;
  d: path("M3 4V3h18v1zm0 17v-1h18v1zm8-4.5V7h2v9.5z");
}
</style><path class="xji8wacnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-self-stretch"} {...others} />);
}

export default Component;
