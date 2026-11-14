import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azbimqb2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.596 3.282l.707.708a1.5 1.5 0 0 1 0 2.121L11.2 13.214a1.5 1.5 0 0 1-.767.411l-1.322.264a1.202 1.202 0 0 1-1.414-1.414l.264-1.323a1.5 1.5 0 0 1 .41-.766l7.104-7.104a1.5 1.5 0 0 1 2.121 0M3.5 20.5h17");
}
</style><path class="azbimqb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:edit-line"} {...others} />);
}

export default Component;
