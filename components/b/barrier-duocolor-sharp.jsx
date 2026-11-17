import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tw7cj-bsm {
  d: path("M3 7h18v6H3zm2 6v5m14-5v5M3 18h4m10 0h4");
}

.v__x9mfys {
  stroke-opacity: 0.4;
  d: path("m3 7l6 6m0-6l6 6m0-6l6 6");
}
</style><g class="nrj6p8qat"><path class="v__x9mfys"/><path class="tw7cj-bsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:barrier-duocolor-sharp"} {...others} />);
}

export default Component;
