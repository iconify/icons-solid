import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oywtd5bjt {
  fill: currentColor;
  d: path("M7 21v-2h10v2zm0-3V8l3.75-5h2.5L17 8v10zm2-7l2-2V6L9 8.675zm6 0V8.675L13 6v3z");
}
</style><path class="oywtd5bjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tools-phillips"} {...others} />);
}

export default Component;
