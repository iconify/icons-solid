import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rjt28jbjm {
  fill: currentColor;
  d: path("M3 19V5h18v14zm9-6.884l8-5.231V6l-8 5l-8-5v.885z");
}
</style><path class="rjt28jbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mail-sharp"} {...others} />);
}

export default Component;
