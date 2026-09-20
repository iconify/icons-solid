import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhmhl7bnr {
  fill: currentColor;
  d: path("M9 17.625V12.5h6v5.125zm0-6.096V6.577h6v4.952zm-6.5 0V4.673L8 6.248v5.28zm0 7.837V12.5H8v5.396zm19 0l-5.5-1.47V12.5h5.5zM16 11.529V6.254l5.5-1.475v6.75z");
}
</style><path class="bhmhl7bnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:spatial-gallery"} {...others} />);
}

export default Component;
