import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aabr3imbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m6.029 7.285l5 3c1.295.777 1.295 2.653 0 3.43l-5 3C4.696 17.515 3 16.555 3 15V9c0-1.555 1.696-2.515 3.029-1.715m9 0l5 3c1.295.777 1.295 2.653 0 3.43l-5 3C13.696 17.515 12 16.555 12 15V9c0-1.555 1.696-2.515 3.029-1.715");
}
</style><path class="aabr3imbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fast-forward-round"} {...others} />);
}

export default Component;
