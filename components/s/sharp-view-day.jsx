import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t3rq_2x_q {
  fill: currentColor;
  d: path("M2 21h19v-3H2zM21 8H2v8h19zM2 3v3h19V3z");
}
</style><path class="t3rq_2x_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-day"} {...others} />);
}

export default Component;
