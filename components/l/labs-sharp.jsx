import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k7951rbyj {
  fill: currentColor;
  d: path("M12 21q-1.804 0-3.075-1.241T7.654 16.73V7.654H6V3h12v4.654h-1.673v9.365q-.116 1.69-1.367 2.836T12 21m2.357-1.942q.97-.943.97-2.327v-.75h-3.193v-1h3.193v-2.846h-3.193v-1h3.193V7.654H8.654v9.077q0 1.384.98 2.327q.982.942 2.367.942t2.356-.942");
}
</style><path class="k7951rbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:labs-sharp"} {...others} />);
}

export default Component;
