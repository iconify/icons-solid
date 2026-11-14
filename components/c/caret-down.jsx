import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h3as5ebkv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m10.351 15.826l-3.06-3.295q-1.003-1.079-.414-2.43T8.94 8.75h6.12q1.474 0 2.063 1.351t-.415 2.43l-3.059 3.295q-.668.719-1.649.719t-1.648-.719z");
}
</style><path class="h3as5ebkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:caret-down"} {...others} />);
}

export default Component;
