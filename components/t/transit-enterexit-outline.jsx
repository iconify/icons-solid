import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xz76q5bpc {
  fill: currentColor;
  d: path("M6 18V8h3v4.75l6.8-6.8l2.2 2.2L11.15 15H16v3z");
}
</style><path class="xz76q5bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:transit-enterexit-outline"} {...others} />);
}

export default Component;
