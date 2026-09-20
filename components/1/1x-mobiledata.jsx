import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lg_05vbwv {
  fill: currentColor;
  d: path("M6.5 16.5v-8h-2v-1h3v9zm4.735 0l2.842-4.8l-2.542-4.2h1.196l1.958 3.211l1.93-3.211h1.147l-2.493 4.2l2.843 4.8h-1.197l-2.269-3.811l-2.27 3.811z");
}
</style><path class="lg_05vbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:1x-mobiledata"} {...others} />);
}

export default Component;
