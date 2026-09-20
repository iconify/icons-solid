import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gh2ghdcwc {
  fill: currentColor;
  d: path("M15.385 19q-.214 0-.357-.143q-.144-.143-.144-.357t.144-.357t.357-.143h3q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T18.384 6h-3q-.213 0-.356-.143q-.144-.144-.144-.357t.144-.357Q15.171 5 15.384 5h3q.691 0 1.153.463T20 6.616v10.769q0 .69-.463 1.153T18.385 19zm-3.742 1.857q-.143-.143-.143-.357V19H5.616q-.691 0-1.153-.462T4 17.384V6.616q0-.691.463-1.153T5.616 5H11.5V3.5q0-.213.143-.357T12 3t.357.143t.143.357v17q0 .214-.143.357T12 21t-.357-.143M19 6v12z");
}
</style><path class="gh2ghdcwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:split-scene-left-outline-rounded"} {...others} />);
}

export default Component;
