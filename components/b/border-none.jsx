import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afpchdbmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h.01M3 7.5h.01M3 12h.01M3 16.5h.01M3 21h.01M7.5 3h.01M7.5 21h.01M12 3h.01M12 21h.01M16.5 3h.01m-.01 18h.01M21 3h.01M21 7.5h.01M21 12h.01M21 16.5h.01M21 21h.01M7.5 12h.01M12 7.5h.01M12 12h.01M12 16.5h.01M16.5 12h.01");
}
</style><path class="afpchdbmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:border-none"} {...others} />);
}

export default Component;
