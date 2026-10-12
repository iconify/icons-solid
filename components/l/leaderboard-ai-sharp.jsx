import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xv775isfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25v-6H8.5v-4h7v6h5.75v5H2.75zM12 13.5V18m0-15.25l.33 2.42l2.42.33l-2.42.33L12 8.25l-.33-2.42l-2.42-.33l2.42-.33z");
}
</style><path class="xv775isfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:leaderboard-ai-sharp"} {...others} />);
}

export default Component;
