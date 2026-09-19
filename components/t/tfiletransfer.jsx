import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p6bgyybrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.533 5.5l10 10.867H22v11h-8.933v-11H7.533Z");
}

.r613nccsa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.867 19.9v11.4h5.6l-9.934 11.2l-10.266-11.2h5.466V19.9Z");
}
</style><path class="p6bgyybrx"/><path class="r613nccsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tfiletransfer"} {...others} />);
}

export default Component;
