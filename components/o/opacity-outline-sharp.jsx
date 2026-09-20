import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nr_t79bla {
  fill: currentColor;
  d: path("M6.338 18.7Q4 16.4 4 13.1q0-1.625.625-3.037T6.35 7.55L12 2l5.65 5.55q1.1 1.1 1.725 2.513T20 13.1q0 3.3-2.337 5.6T12 21t-5.663-2.3M6.05 14H17.9q.3-1.8-.337-3.075T16.25 9L12 4.8L7.75 9q-.675.65-1.325 1.925T6.05 14");
}
</style><path class="nr_t79bla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:opacity-outline-sharp"} {...others} />);
}

export default Component;
