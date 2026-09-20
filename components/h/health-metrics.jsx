import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhul04fcc {
  fill: currentColor;
  d: path("M7 22v-5H2v-4h6.45l1.7 2.55q.125.2.35.325t.475.125q.325 0 .6-.2t.375-.5l1.35-4.05l.85 1.3q.15.2.375.325T15 13h7v4h-5v5zm3.7-9.25l-.875-1.3q-.125-.2-.35-.325T9 11H2V7h5V2h10v5h5v4h-6.475l-1.7-2.55q-.125-.2-.35-.325T13 8q-.325 0-.587.2t-.363.5z");
}
</style><path class="bhul04fcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:health-metrics"} {...others} />);
}

export default Component;
