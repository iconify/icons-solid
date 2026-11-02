import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ghm_h3rfr {
  fill: currentColor;
  d: path("m12 5.586l.293-.293a5.243 5.243 0 0 1 7.414 7.414l-7 7a1 1 0 0 1-1.414 0l-7-7a5.243 5.243 0 0 1 7.414-7.414Z");
}
</style><path class="ghm_h3rfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:heart-alt-fill-sharp"} {...others} />);
}

export default Component;
