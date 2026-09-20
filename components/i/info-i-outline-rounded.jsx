import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rjr6r_t-y {
  fill: currentColor;
  d: path("M10.934 6.566Q10.5 6.133 10.5 5.5t.434-1.066Q11.367 4 12 4t1.066.434T13.5 5.5t-.434 1.066Q12.633 7 12 7t-1.066-.434m.36 13.14Q11 19.414 11 19v-8.23q0-.414.293-.707T12 9.769t.707.293t.293.707V19q0 .414-.293.707T12 20t-.707-.293");
}
</style><path class="rjr6r_t-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:info-i-outline-rounded"} {...others} />);
}

export default Component;
