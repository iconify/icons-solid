import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ce-93d5zo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 40.021L24 7.978L11.545 40.021l16.352-25.294M16.366 40.021l13.75-21.45l-8.197 21.45l9.973-18.375m-5.784 18.375l7.869-14.763l-5.214 14.763m1.883 0l6.04-10.069m1.917 3.32l-4.026 6.75m7.923-.001h-3.873l1.936-3.354");
}
</style><path class="ce-93d5zo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:navilex"} {...others} />);
}

export default Component;
