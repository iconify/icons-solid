import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.evdbi7brj {
  fill: currentColor;
  d: path("M4 10h16zm2 11v-4H2V8h20v3.75q-.45-.25-.95-.425t-1.05-.25V10H4v5h2v-2h8.5q-.4.425-.725.925T13.25 15H8v4h5.1q.175.55.425 1.05t.6.95zm11.95-.825L15.1 17.35l1.425-1.4l1.425 1.4l3.525-3.525l1.425 1.4zM16 8V5H8v3H6V3h12v5z");
}
</style><path class="evdbi7brj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:print-connect-outline-sharp"} {...others} />);
}

export default Component;
