import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cwiwjnbbn {
  fill: currentColor;
  d: path("M18.447 8.106a.998.998 0 0 1 0 1.788L7 15.618V21a1 1 0 0 1-2 0V3a1 1 0 0 1 1.447-.894Z");
}
</style><path class="cwiwjnbbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flag-triangle-fill-sharp"} {...others} />);
}

export default Component;
