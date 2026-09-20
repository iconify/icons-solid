import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.isai6idtl {
  fill: currentColor;
  d: path("M18.288 20.713Q18 20.425 18 20t.288-.712T19 19t.713.288T20 20t-.288.713T19 21t-.712-.288M18 17v-5h2v5zM6 21v-4H2V8h19.825v2H16v5H8v4h8v2zM6 7V3h12v4z");
}
</style><path class="isai6idtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:print-error-sharp"} {...others} />);
}

export default Component;
