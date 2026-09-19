import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.agh3ykb5f {
  fill: currentColor;
  d: path("m22 7.46l-1.41-1.41L19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5l-1.59-1.56L2 7.44L4.66 10h14.69zM5.93 20h12.14l.63-8.45H5.3z");
}
</style><path class="agh3ykb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-takeout-dining"} {...others} />);
}

export default Component;
