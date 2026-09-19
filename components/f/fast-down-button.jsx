import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.dsvm5n1ip {
  fill: currentColor;
  d: path("M53.213 10.787c-11.715-11.715-30.711-11.715-42.426 0c-11.716 11.717-11.716 30.711 0 42.426s30.711 11.715 42.426 0s11.716-30.71 0-42.426M50 32.723L32 51.998L14 32.723h11.879L14 20h36L38.121 32.723z");
}
</style><path class="dsvm5n1ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:fast-down-button"} {...others} />);
}

export default Component;
