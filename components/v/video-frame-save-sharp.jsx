import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hm03oybxc {
  fill: currentColor;
  d: path("M20 10V6h-4V5h5v5zM3 10V5h5v1H4v4zm0 9v-5h1v4h4v1zm7-3.423V8.423L15.577 12zm5.77 7.917v-1h7v1zm3.5-2.725l-3.308-3.307l.707-.708l2.1 2.088v-4.88h1v4.88l2.1-2.088l.708.707z");
}
</style><path class="hm03oybxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:video-frame-save-sharp"} {...others} />);
}

export default Component;
