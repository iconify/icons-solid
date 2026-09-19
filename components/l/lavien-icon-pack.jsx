import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m2xcybbvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.157 17.882l3.062 3.062a4.32 4.32 0 0 1 0 6.126l-3.063 3.063a4.32 4.32 0 0 1-6.125 0l-3.063-3.063a4.32 4.32 0 0 1 0-6.125l3.063-3.063a4.32 4.32 0 0 1 6.126 0M27.063 31.976l3.062 3.063a4.32 4.32 0 0 1 0 6.125l-3.063 3.063a4.32 4.32 0 0 1-6.126 0l-3.062-3.062a4.32 4.32 0 0 1 0-6.126l3.063-3.063a4.32 4.32 0 0 1 6.125 0M12.97 17.882l3.062 3.062a4.32 4.32 0 0 1 0 6.126l-3.063 3.063a4.32 4.32 0 0 1-6.126 0L3.781 27.07a4.32 4.32 0 0 1 0-6.125l3.063-3.063a4.32 4.32 0 0 1 6.125 0m14.11-14.109l3.062 3.062a4.32 4.32 0 0 1 0 6.126l-3.063 3.063a4.32 4.32 0 0 1-6.126 0l-3.062-3.063a4.32 4.32 0 0 1 0-6.125l3.063-3.063a4.32 4.32 0 0 1 6.125 0");
}

.rz-ssrbyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.816 7.529h4.331c2.4 0 4.332 1.932 4.332 4.332v4.331c0 2.4-1.932 4.332-4.332 4.332h-4.331a4.32 4.32 0 0 1-4.332-4.332V11.86c0-2.4 1.932-4.331 4.332-4.331m0 19.931h4.331c2.4 0 4.332 1.932 4.332 4.332v4.332c0 2.4-1.932 4.331-4.332 4.331h-4.331a4.32 4.32 0 0 1-4.332-4.331v-4.332c0-2.4 1.932-4.332 4.332-4.332m-19.931 0h4.331c2.4 0 4.332 1.932 4.332 4.332v4.332c0 2.4-1.932 4.331-4.332 4.331h-4.331a4.32 4.32 0 0 1-4.332-4.331v-4.332c0-2.4 1.932-4.332 4.332-4.332m0-19.953h4.331c2.4 0 4.332 1.932 4.332 4.331v4.332c0 2.4-1.932 4.332-4.332 4.332h-4.331a4.32 4.32 0 0 1-4.332-4.332v-4.332c0-2.4 1.932-4.331 4.332-4.331");
}
</style><path class="rz-ssrbyd"/><path class="m2xcybbvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lavien-icon-pack"} {...others} />);
}

export default Component;
