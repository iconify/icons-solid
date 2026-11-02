import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hpbvktbmw {
  fill: currentColor;
  d: path("M21 15.764a3 3 0 0 1-1.658 2.683l-6 3a3 3 0 0 1-2.684 0l-6-3A3 3 0 0 1 3 15.764V8.236a3 3 0 0 1 1.658-2.683l6-3a3 3 0 0 1 2.684 0l6 3A3 3 0 0 1 21 8.236ZM10.707 9.293a.999.999 0 1 0-1.414 1.414L10.586 12l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 13.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 12l1.293-1.293a.999.999 0 1 0-1.414-1.414L12 10.586Z");
}
</style><path class="hpbvktbmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hexagon-close-fill"} {...others} />);
}

export default Component;
