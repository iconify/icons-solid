import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kmaiokbns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 8v6.5M4 21l3-6.5l3 6.5m-6.5-9L7 9l3.5 3m4-5.75c0-1.55 1.25-2.75 3-2.75s3 1.2 3 2.75c0 2.25-3 2.5-3 4.75m0 3.5h.01");
}
</style><path class="kmaiokbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:person-question"} {...others} />);
}

export default Component;
