import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.isvm1dbxx {
  fill: currentColor;
  d: path("M2 22V6h6V2h8v4h6v16zm8-16h4V4h-4zm1 9v3h2v-3h3v-2h-3v-3h-2v3H8v2z");
}
</style><path class="isvm1dbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:medical-services-sharp"} {...others} />);
}

export default Component;
