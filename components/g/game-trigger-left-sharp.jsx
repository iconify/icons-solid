import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m-yf228hb {
  fill: currentColor;
  d: path("M7.804 15.116h3.802v-.827H8.659V8.904h-.855zm6.565 0h.856V9.73h1.933v-.827h-4.74v.827h1.951zM3 19V8.27q0-1.357.977-2.323t2.35-.966h11.346q1.373 0 2.35.966T21 8.269V19z");
}
</style><path class="m-yf228hb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:game-trigger-left-sharp"} {...others} />);
}

export default Component;
