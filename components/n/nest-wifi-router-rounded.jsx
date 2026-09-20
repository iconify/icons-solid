import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hja9ht34u {
  fill: currentColor;
  d: path("M8.73 20q-1.578 0-2.818-.937t-1.716-2.447h15.608q-.477 1.511-1.716 2.448T15.269 20zm-4.71-4.384Q4 15.519 4 15.442V8.731q0-1.962 1.385-3.346Q6.768 4 8.73 4h6.538q1.962 0 3.347 1.385Q20 6.768 20 8.73v6.711q0 .077-.02.174z");
}
</style><path class="hja9ht34u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:nest-wifi-router-rounded"} {...others} />);
}

export default Component;
