import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fpncr25kl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 19.75q-3.75 0-3.75-6.125q0-5.75 3.3-8.225Q8.25 4.125 12 4.125T17.45 5.4q3.3 2.475 3.3 8.225q0 6.125-3.75 6.125q-1.367 0-2.612-2.543Q13.184 14.75 12 14.75t-2.388 2.457Q8.367 19.75 7 19.75");
}
</style><path class="fpncr25kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:neck-pillow"} {...others} />);
}

export default Component;
