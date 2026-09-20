import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ov2b0lbtm {
  fill: currentColor;
  d: path("M17.733 16.248L6.6 5h8.227q.379 0 .727.165q.348.164.565.462L21 12zM20.5 23.3l-4.629-4.629q-.115.152-.282.24t-.362.089H4.615q-.67 0-1.143-.472Q3 18.056 3 17.385V6.615q0-.178.043-.349t.11-.312L.7 3.5l.708-.708l19.8 19.8z");
}
</style><path class="ov2b0lbtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:label-off"} {...others} />);
}

export default Component;
