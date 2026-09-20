import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdffd6b5z {
  fill: currentColor;
  d: path("M3.5 20V6.616h1V19h12.385v1zm3-3V3h14v14zm6.77-9.961h6.23V4h-6.23z");
}
</style><path class="fdffd6b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tab-group-sharp"} {...others} />);
}

export default Component;
