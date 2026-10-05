import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-tr5kbsm {
  stroke-opacity: 0.4;
  d: path("M17 2L17 12.2604M12 8.1053L16.6759 12.8633C16.8549 13.0456 17.1451 13.0456 17.3241 12.8633L22 8.1053");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tntlj82nu {
  d: path("M7 22L7 11.7396M12 15.8947L7.3241 11.1367C7.1451 10.9544 6.8549 10.9544 6.6759 11.1367L2 15.8947");
}
</style><g class="nrj6p8qat"><path class="b-tr5kbsm"/><path class="tntlj82nu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-up-down-2-two-tone"} {...others} />);
}

export default Component;
