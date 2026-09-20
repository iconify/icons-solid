import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o9p89mblc {
  fill: currentColor;
  d: path("M11.596 15.173V8.827L8.404 12zM5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zM16 19h3V5.616q0-.231-.192-.424T18.384 5H16zm-1 0V5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192zm1 0h3z");
}
</style><path class="o9p89mblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:right-panel-open-outline"} {...others} />);
}

export default Component;
