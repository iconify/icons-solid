import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a93huobqi {
  fill: currentColor;
  d: path("M20 2h2v20h-2zM2 10h16V7H2zm6 7h10v-3H8z");
}
</style><path class="a93huobqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-align-horizontal-right"} {...others} />);
}

export default Component;
