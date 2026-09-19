import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.r96z0ho0y {
  fill: currentColor;
  d: path("M25.386 2v36.721c-1.249-.406-3.727-.629-5.163-.629c-13.631 0-13.631 16.59 0 16.59c5.856 0 11.715-3.715 11.715-8.295V25.781L47.448 31v15.037c-1.249-.404-3.727-.629-5.163-.629c-13.631 0-13.631 16.592 0 16.592C48.142 62 54 58.287 54 53.705V11.442zm22.062 21.518l-15.511-5.309v-6.291l15.511 5.367z");
}
</style><path class="r96z0ho0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:musical-note"} {...others} />);
}

export default Component;
