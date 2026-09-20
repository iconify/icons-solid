import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.viwrbjb_p {
  fill: currentColor;
  d: path("M7.75 17.116V6.885h1v10.23zM11.5 21V3h1v18zM4 13.308v-2.616h1v2.616zm11.25 3.807V6.885h1v10.23zM19 13.308v-2.616h1v2.616z");
}
</style><path class="viwrbjb_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:graphic-eq-outline-sharp"} {...others} />);
}

export default Component;
