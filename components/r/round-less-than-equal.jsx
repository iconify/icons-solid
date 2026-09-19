import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jy-pcqb1o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m16.75 15l-7.5-5l7.5-5a.901.901 0 1 0-1-1.5L7.248 9.168a1 1 0 0 0 0 1.664L15.75 16.5a.901.901 0 1 0 1-1.5");
}

.pywi5nbeq {
  fill: currentColor;
  d: path("M17 20.998H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2");
}
</style><path class="jy-pcqb1o"/><path class="pywi5nbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-less-than-equal"} {...others} />);
}

export default Component;
