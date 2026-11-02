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

.qyxqzrb2b {
  d: path("M12 3h8v7c0 5.5-3.5 9-8 11c-4.5-2-8-5.5-8-11V3z");
}

.wwmj5jnnn {
  stroke-opacity: 0.4;
  d: path("m10 9l4 4m0-4l-4 4");
}
</style><g class="nrj6p8qat"><path class="wwmj5jnnn"/><path class="qyxqzrb2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-close-duocolor-sharp"} {...others} />);
}

export default Component;
