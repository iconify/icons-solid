import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ef0fh708y {
  fill: currentColor;
  d: path("m17.733 16.248l-.714-.713L19.75 12l-4.423-5.77q-.096-.114-.221-.172T14.827 6H7.6l-1-1h8.227q.379 0 .727.165q.348.164.565.462L21 12zM4.616 18H15.2L4 6.8v10.585q0 .269.173.442t.443.173M20.5 23.3l-4.629-4.629q-.115.152-.282.24t-.362.089H4.615q-.67 0-1.143-.472Q3 18.056 3 17.385V6.615q0-.178.043-.349t.11-.312L.7 3.5l.708-.708l19.8 19.8zM9.6 12.4");
}
</style><path class="ef0fh708y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:label-off-outline"} {...others} />);
}

export default Component;
