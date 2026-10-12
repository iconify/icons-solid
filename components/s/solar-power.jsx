import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.su2z5gbks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.25h12q1 0 1.2.98l1.85 9.04q.2.98-.8.98H3.75q-1 0-.8-.98L4.8 4.23Q5 3.25 6 3.25m6 0v11m-8.05-5.5h16.1M12 14.25v7m-3.5 0h7");
}
</style><path class="su2z5gbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:solar-power"} {...others} />);
}

export default Component;
