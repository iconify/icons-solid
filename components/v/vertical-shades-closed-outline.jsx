import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkb1f-bjh {
  fill: currentColor;
  d: path("M3 20v-1h2V4h14v15h2v1zm3-1h2.25V5H6zm3.25 0h2.25V5H9.25zm3.25 0h2.25V5H12.5zm3.25 0H18V5h-2.25z");
}
</style><path class="fkb1f-bjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:vertical-shades-closed-outline"} {...others} />);
}

export default Component;
