import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sig0k-bdd {
  fill: currentColor;
  d: path("M5.5 18.27v-.5h13v.5zm0-2.5v-1h13v1zm0-3v-1.462h13v1.461zm0-3.5V5.73h13v3.54z");
}
</style><path class="sig0k-bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-weight-sharp"} {...others} />);
}

export default Component;
