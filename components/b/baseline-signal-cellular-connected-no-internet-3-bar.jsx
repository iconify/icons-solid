import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f0rga3b-n {
  fill: currentColor;
  d: path("M17 22V7L2 22zm3-12v8h2v-8zm0 12h2v-2h-2z");
}

.prp8dgy0l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M22 8V2L2 22h16V8z");
}
</style><path class="prp8dgy0l"/><path class="f0rga3b-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-signal-cellular-connected-no-internet-3-bar"} {...others} />);
}

export default Component;
