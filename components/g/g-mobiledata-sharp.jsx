import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqq8h5bkf {
  fill: currentColor;
  d: path("M7.5 16.616V7.385h7.692v1H8.5v7.23h6V12.5h-2.384v-1H15.5v5.116z");
}
</style><path class="fqq8h5bkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:g-mobiledata-sharp"} {...others} />);
}

export default Component;
