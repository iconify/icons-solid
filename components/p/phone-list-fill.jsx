import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vvl_q7brv {
  fill: currentColor;
  d: path("M223.88 183.08A56.26 56.26 0 0 1 168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15a.6.6 0 0 0 0 .12a16 16 0 0 1-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.18-1.4l.12.06l47.1 21.11a16 16 0 0 1 9.56 16.62M144 72h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m0 40h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16");
}
</style><path class="vvl_q7brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:phone-list-fill"} {...others} />);
}

export default Component;
