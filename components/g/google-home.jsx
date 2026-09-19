import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pr-svlbre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.536 42.272H9.464A3.964 3.964 0 0 1 5.5 38.308V24.213a3.96 3.96 0 0 1 1.163-2.805l14.535-14.52a3.963 3.963 0 0 1 5.604 0l14.535 14.52a3.96 3.96 0 0 1 1.163 2.805v14.095a3.964 3.964 0 0 1-3.964 3.964m-25.107-7.928H34.57v-8.488L24 15.296l-10.571 10.56ZM29.587 9.67L5.5 33.794m7.929.55v7.928m21.142-7.928v7.928");
}
</style><path class="pr-svlbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:google-home"} {...others} />);
}

export default Component;
