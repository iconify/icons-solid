import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sg77uwb7w {
  fill: currentColor;
  d: path("M6.923 18.654q-1.01 0-1.716-.707q-.707-.706-.707-1.716t.707-1.717t1.716-.706t1.717.707t.706 1.716q0 1.01-.707 1.716q-.706.707-1.716.707m10.154 0q-1.01 0-1.716-.707q-.707-.707-.707-1.716q0-1.01.707-1.717t1.716-.706t1.716.707t.707 1.716t-.707 1.716q-.706.707-1.716.707m-6.789-9.168q-.711-.707-.711-1.717t.712-1.716T12 5.346t1.712.707q.711.707.711 1.716q0 1.01-.711 1.717T12 10.192t-1.711-.706");
}
</style><path class="sg77uwb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:atr-rounded"} {...others} />);
}

export default Component;
