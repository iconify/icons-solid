import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vmwcp1byk {
  fill: currentColor;
  d: path("M3.581 15.356a9.062 9.062 0 0 1 9.543-12.348a1 1 0 1 1-.248 1.984a7.062 7.062 0 0 0-7.237 10.076a3 3 0 1 1-2.058.288m16.838-6.712a9.062 9.062 0 0 1-9.543 12.348a.999.999 0 1 1 .248-1.984a7.058 7.058 0 0 0 7.237-10.076a3 3 0 1 1 2.058-.288M8.315 10.443a4.001 4.001 0 0 1 7.37 3.114a4.001 4.001 0 0 1-7.37-3.114");
}
</style><path class="vmwcp1byk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:orbit-fill"} {...others} />);
}

export default Component;
