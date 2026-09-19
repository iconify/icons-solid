import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g1itsyb0s {
  fill: currentColor;
  d: path("M2 7h4v10H2zm5 12h10V5H7zM18 7h4v10h-4z");
}
</style><path class="g1itsyb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-carousel"} {...others} />);
}

export default Component;
