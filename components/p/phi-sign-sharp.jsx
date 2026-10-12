import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cvfbhjbfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.75c4 0 6.75 2.25 6.75 5.25S16 17.25 12 17.25S5.25 15 5.25 12S8 6.75 12 6.75Zm0-4v18.5");
}
</style><path class="cvfbhjbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:phi-sign-sharp"} {...others} />);
}

export default Component;
