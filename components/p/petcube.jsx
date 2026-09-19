import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ed6wi2bdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.105 23.036l2.625-1.497l2.626 4.528m2.898 1.674l2.626-1.497l2.625 4.528");
}

.i_r7xhb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.003 44.5l17.724-10.229V13.803L23.887 3.5L6.163 13.729v20.468z");
}
</style><path class="i_r7xhb3l"/><path class="ed6wi2bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:petcube"} {...others} />);
}

export default Component;
