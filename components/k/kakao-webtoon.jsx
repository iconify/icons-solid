import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.o-6xin7wg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 16.544v14.912H29.735L24 18.838l-5.735 12.618H4.5V16.544h6.882v12.618l5.736-12.618h13.764l5.736 12.618V16.544z");
}
</style><path class="o-6xin7wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:kakao-webtoon"} {...others} />);
}

export default Component;
