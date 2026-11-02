import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tp6t8obxz {
  fill: currentColor;
  d: path("M9.465 14h5.07A4.002 4.002 0 0 1 20 8.536A4 4 0 0 1 18 16H6a4.001 4.001 0 1 1 3.465-2");
}
</style><path class="tp6t8obxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:voicemail-fill-sharp"} {...others} />);
}

export default Component;
