import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zz8f0jbsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.3 19H2.5V5h19v6.6m-19-2.1h19m-19 0h19M6 15h2.5m6.5 3q1.5-2.25 3-2.25T21 18q-1.5 2.25-3 2.25T15 18Zm0 3l6-6");
}
</style><path class="zz8f0jbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:card-eye-off"} {...others} />);
}

export default Component;
