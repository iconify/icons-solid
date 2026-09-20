import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.l0jlo_qef {
  fill: currentColor;
  d: path("m208.49 64.49l-144 144a12 12 0 0 1-17-17l144-144a12 12 0 0 1 17 17M60 112a12 12 0 0 0 24 0V84h28a12 12 0 0 0 0-24H84V32a12 12 0 0 0-24 0v28H32a12 12 0 0 0 0 24h28Zm164 60h-80a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24");
}
</style><path class="l0jlo_qef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:plus-minus-bold"} {...others} />);
}

export default Component;
