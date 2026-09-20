import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.drzjwob1x {
  fill: currentColor;
  d: path("M9.577 13.462h.846v.788h1.154v-.788h.827v.788h1.154v-.788h.846V8.385h-1.077V6.5h-2.673v1.885H9.577zm1.846-5.077V7.268h1.135v1.115zM6 19.5V4h12v15.5l-6-2.583z");
}
</style><path class="drzjwob1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bookmark-bag-sharp"} {...others} />);
}

export default Component;
