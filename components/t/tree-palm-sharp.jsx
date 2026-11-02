import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g21x4li4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8C9.875 4.211 4.241 4.837 3 9Zm9 1c-1.241-4.163-6.875-4.789-9-1Zm-9-1a7.52 7.52 0 0 0-7 8Zm7 8a7.52 7.52 0 0 0-7-8Zm-7 5V8");
}
</style><path class="g21x4li4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tree-palm-sharp"} {...others} />);
}

export default Component;
