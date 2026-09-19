import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prp8dgy0l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M22 8V2L2 22h16V8z");
}

.wtt2o_bsv {
  fill: currentColor;
  d: path("M14 22V10L2 22zm6-12v8h2v-8zm0 12h2v-2h-2z");
}
</style><path class="prp8dgy0l"/><path class="wtt2o_bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-signal-cellular-connected-no-internet-2-bar"} {...others} />);
}

export default Component;
