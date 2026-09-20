import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lm697sbxv {
  fill: currentColor;
  d: path("m12.025 17.025l1.4-1.4L11.8 14H16v-2h-4.2l1.625-1.625l-1.4-1.4L8 13ZM2 20V4h8l2 2h10v14Zm2-2h16V8h-8.825l-2-2H4Zm0 0V6v2Z");
}
</style><path class="lm697sbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:drive-file-move-rtl-outline-sharp"} {...others} />);
}

export default Component;
