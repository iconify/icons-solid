import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v3p4l2bax {
  fill: currentColor;
  d: path("M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-56 80h-20v20a8 8 0 0 1-16 0v-20H88a8 8 0 0 1 0-16h20v-20a8 8 0 0 1 16 0v20h20a8 8 0 0 1 0 16m112-40v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0");
}
</style><path class="v3p4l2bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:battery-plus-fill"} {...others} />);
}

export default Component;
