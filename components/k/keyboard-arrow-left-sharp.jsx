import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iuv0p8l1z {
  fill: currentColor;
  d: path("m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z");
}
</style><path class="iuv0p8l1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-arrow-left-sharp"} {...others} />);
}

export default Component;
