import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r50vm8qiy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 1.75H6.875q-2.123 0-3.624 1.501T1.75 6.875v10.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624V6.875q0-2.123-1.501-3.624T17.125 1.75m-.011 6.594q2.29 1.433 1.103 3.86q-.495 1.013-1.225 1.442q.431.825.201 2.084q-.513 2.814-3.349 2.435q-1.196-.159-1.844-.759q-.648.6-1.844.759q-2.836.379-3.349-2.435q-.23-1.259.201-2.084q-.73-.429-1.225-1.442q-1.187-2.427 1.103-3.86q1.058-.662 1.982-.565q.107-.975 1.087-1.888q2.045-1.906 4.09 0q.98.913 1.087 1.888q.924-.097 1.982.565");
}
</style><path class="r50vm8qiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:floral-print-swatch"} {...others} />);
}

export default Component;
