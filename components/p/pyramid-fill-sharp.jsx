import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lb8u9_b8o {
  fill: currentColor;
  d: path("m1.168 19.445l10-15a1 1 0 0 1 1.664 0l10 15A1 1 0 0 1 22 21H2a1 1 0 0 1-.832-1.555M3.869 19h10.829L11.604 7.397Z");
}
</style><path class="lb8u9_b8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pyramid-fill-sharp"} {...others} />);
}

export default Component;
