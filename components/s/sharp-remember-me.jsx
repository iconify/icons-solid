import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b9jxa4bqw {
  fill: currentColor;
  d: path("M19 1H5v22h14zm-2 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10z");
}

.mxc6vr24n {
  cx: 12px;
  cy: 10px;
  r: 3px;
  fill: currentColor;
}
</style><path class="b9jxa4bqw"/><circle class="mxc6vr24n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-remember-me"} {...others} />);
}

export default Component;
