import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r8s8fbb6t {
  fill: currentColor;
  d: path("M6.73 17.385v-8.77H8.5v5.712l7.492-7.492l1.277 1.277l-7.503 7.504H15.5v1.769z");
}
</style><path class="r8s8fbb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:transit-enterexit-sharp"} {...others} />);
}

export default Component;
