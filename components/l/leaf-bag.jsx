import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhfjiaczi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.75 7.25h.819q3.125 0 3.365 3.117l.597 7.749q.113 1.471-.889 2.553t-2.477 1.081H6.835q-1.474 0-2.477-1.081q-1.002-1.082-.889-2.552l.597-7.751q.24-3.116 3.365-3.116h.819V6.5q0-3.75 3.75-3.75t3.75 3.75zm-6 0V6.5q0-2.25 2.25-2.25t2.25 2.25v.75zM8 17.75q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014Q16 18.5 16 11q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014Q8 10.25 8 17.75");
}
</style><path class="yhfjiaczi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:leaf-bag"} {...others} />);
}

export default Component;
