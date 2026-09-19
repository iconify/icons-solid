import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.je_90ybmv {
  fill: currentColor;
  d: path("M4 3H2v14h11v-2H4zm18.24 12.96l-2.53 1.15l-3.41-6.98A2.02 2.02 0 0 0 14.51 9H11V3H5v11h10l3.41 7l5.07-2.32z");
}
</style><path class="je_90ybmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-airline-seat-legroom-extra"} {...others} />);
}

export default Component;
