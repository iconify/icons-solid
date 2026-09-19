import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.fmf6wp8tz {
  fill: currentColor;
  d: path("M53.214 10.787c-11.715-11.716-30.711-11.716-42.426 0c-11.717 11.715-11.717 30.711 0 42.426c11.715 11.716 30.711 11.716 42.426 0s11.715-30.711 0-42.426M48 43.351H16V37.65h32zm-32-9.702l16-19l16 19z");
}
</style><path class="fmf6wp8tz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:eject-button"} {...others} />);
}

export default Component;
