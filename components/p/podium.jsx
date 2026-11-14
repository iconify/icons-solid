import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q50rps9la {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5v-7h6V10h7v5.5h6v5Zm9.867-16.506l.019.038a1.5 1.5 0 0 0 1.129.82l.041.006a.41.41 0 0 1 .227.699l-.029.029a1.5 1.5 0 0 0-.432 1.328l.007.04a.41.41 0 0 1-.594.432l-.037-.019a1.5 1.5 0 0 0-1.396 0l-.037.019a.41.41 0 0 1-.594-.432l.007-.04a1.5 1.5 0 0 0-.432-1.328l-.029-.029a.41.41 0 0 1 .227-.699l.041-.006a1.5 1.5 0 0 0 1.129-.82l.019-.038a.41.41 0 0 1 .734 0");
}
</style><path class="q50rps9la"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:podium"} {...others} />);
}

export default Component;
