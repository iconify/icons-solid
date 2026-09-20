import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4xm8nb5g {
  fill: currentColor;
  d: path("M2 21v-7.577h4.77V21zm7.616 0v-7.577h4.769V21zm7.615 0v-7.577H22V21zm-6.616-1h2.77v-5.577h-2.77zM2 10.577V3h4.77v7.577zm7.616 0V3h4.769v7.577zm7.615 0V3H22v7.577zM3 9.577h2.77V4H3zm15.423 0H21V4h-2.577z");
}
</style><path class="y4xm8nb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flex-wrap-outline-sharp"} {...others} />);
}

export default Component;
