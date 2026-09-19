import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gqrdi_bpi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m9 17l3-2.94a9 9 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m4.47 8.5L12 17l1.4-1.41l2.07 2.08l5.13-5.17l1.4 1.41z");
}
</style><path class="gqrdi_bpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-how-to-reg"} {...others} />);
}

export default Component;
