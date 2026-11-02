import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwifcgbsb {
  fill: currentColor;
  d: path("M12 3h6a1 1 0 0 1 0 2h-5v15a1 1 0 0 1-2 0V5H6a1 1 0 0 1 0-2Z");
}
</style><path class="mwifcgbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-t-fill-round"} {...others} />);
}

export default Component;
