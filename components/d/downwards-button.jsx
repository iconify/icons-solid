import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.b76psvbae {
  fill: currentColor;
  d: path("M53.212 10.785c-11.715-11.714-30.711-11.714-42.426 0c-11.715 11.717-11.715 30.711 0 42.427s30.711 11.717 42.426 0c11.717-11.716 11.717-30.71 0-42.427M31.999 47l-20-20h40z");
}
</style><path class="b76psvbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:downwards-button"} {...others} />);
}

export default Component;
