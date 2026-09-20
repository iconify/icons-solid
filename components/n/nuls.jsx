import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_h9qbbgg {
  fill: var(--svg-color--00e789, #00e789);
  d: path("M10.643 15.029L12 16.91V21l-4.976-2.398V8.067a.53.53 0 0 1 .163-.408l.588-.529a.54.54 0 0 1 .796.082l4.533 6.455l2.515 1.656V6.438l-2.262-1.203v5.578L12 9.13V3l4.976 2.502v10.495l-.995 1.009l-3.664-2.154L8.38 9.261v8.505l2.262 1.099z");
}
</style><path class="b_h9qbbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:nuls"} {...others} />);
}

export default Component;
