import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dg5ib972w {
  fill: currentColor;
  d: path("m15.904 15.5l2.904-2.904V5h-7.596L8.308 7.904h7.596zM11 20.404l2.904-2.904V9.904H6.308l-2.904 2.904H11z");
}
</style><path class="dg5ib972w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:azm"} {...others} />);
}

export default Component;
