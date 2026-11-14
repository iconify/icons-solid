import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yb25s6bym {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.125 1.75h7.75q3.375 0 3.375 3.375v4.75q0 3.375-3.375 3.375H12.75v4.553q.65.162.989.83q.45.882-.132 1.683q-.595.819-1.607.819t-1.607-.819q-.582-.801-.132-1.683q.339-.668.989-.831V13.25H8.125q-3.375 0-3.375-3.375v-4.75q0-3.375 3.375-3.375");
}
</style><path class="yb25s6bym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:piste-marker"} {...others} />);
}

export default Component;
