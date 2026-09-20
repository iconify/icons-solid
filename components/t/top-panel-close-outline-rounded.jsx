import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ezf49nbma {
  fill: currentColor;
  d: path("M11.435 12.97L9.503 14.9q-.192.192-.087.444t.38.252h4.407q.273 0 .379-.252t-.087-.444l-1.93-1.93q-.243-.243-.566-.243t-.565.242M5.615 20q-.67 0-1.143-.472Q4 19.056 4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zM19 8V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616V8zM5 9v9.385q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423V9zm0-1V5z");
}
</style><path class="ezf49nbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:top-panel-close-outline-rounded"} {...others} />);
}

export default Component;
