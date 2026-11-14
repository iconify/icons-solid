import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.crfkcdbif {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15 4.75H9q-3.003 0-5.127 2.123T1.75 12t2.123 5.127Q5.997 19.25 9 19.25h6q3.003 0 5.127-2.123T22.25 12t-2.123-5.127Q18.003 4.75 15 4.75M9 8h6q1.657 0 2.828 1.172Q19 10.343 19 12t-1.172 2.828Q16.657 16 15 16H9q-1.657 0-2.828-1.172Q5 13.657 5 12q0-4 4-4");
}
</style><path class="crfkcdbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:speed-skating-oval"} {...others} />);
}

export default Component;
