import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p34ybybhy {
  fill: currentColor;
  d: path("M8.885 11.596h6.307q.213 0 .357-.144t.143-.356t-.143-.356t-.357-.144H8.885q-.213 0-.357.144q-.143.144-.143.357t.143.356t.357.143m1 2.885h4.307q.213 0 .357-.144q.143-.144.143-.357t-.143-.356t-.357-.143H9.885q-.213 0-.357.144t-.143.357t.143.356t.357.143M7.615 22q-.666 0-1.14-.475T6 20.386V3.615q0-.69.463-1.152T7.616 2h8.846q.666 0 1.14.475t.475 1.14v3.216q.373.04.648.31q.275.269.275.648v1.769q0 .379-.275.648t-.648.31v9.869q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="p34ybybhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mobile-text-2-rounded"} {...others} />);
}

export default Component;
