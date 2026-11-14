import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mjx6aomgy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.75 12q-.001-3.832 2.708-6.543q2.71-2.71 6.542-2.71t6.542 2.71Q21.251 8.168 21.25 12q.001 3.832-2.708 6.543q-2.71 2.71-6.542 2.71t-6.542-2.71T2.75 12");
}
</style><path class="mjx6aomgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:radio-unchecked-ring"} {...others} />);
}

export default Component;
