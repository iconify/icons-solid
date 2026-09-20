import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.imrn2rwow {
  fill: currentColor;
  d: path("M6 14h12l-3.75-5l-3 4L9 10zm-4 8V2h20v16H6z");
}
</style><path class="imrn2rwow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mms-sharp"} {...others} />);
}

export default Component;
