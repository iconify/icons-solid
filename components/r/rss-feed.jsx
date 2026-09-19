import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awxcszb8k {
  fill: currentColor;
  d: path("M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56m0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9");
}

.rkvc4mvdo {
  cx: 6.18px;
  cy: 17.82px;
  r: 2.18px;
  fill: currentColor;
}
</style><circle class="rkvc4mvdo"/><path class="awxcszb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:rss-feed"} {...others} />);
}

export default Component;
