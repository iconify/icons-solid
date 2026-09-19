import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z4wsucdko {
  fill: currentColor;
  d: path("M19.79 5.61A.998.998 0 0 0 19 4H6.83l7.97 7.97zM2.81 2.81L1.39 4.22L10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78l1.41-1.41z");
}
</style><path class="z4wsucdko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-filter-alt-off"} {...others} />);
}

export default Component;
