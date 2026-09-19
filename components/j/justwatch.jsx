import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.smlrfssoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.483 40.034l-5.698 3.284a1.372 1.372 0 0 1-2.053-1.191v-6.57zm0-10.696l-7.741 4.476v-8.953zm0-10.676l-7.741 4.477v-8.953zm0-10.695L8.795 4.682a1.372 1.372 0 0 0-2.053 1.191v6.57zm19.809 21.371l-7.751 4.476v-8.953zm0-10.676l-7.751 4.477v-8.953zM24.318 24l-7.752 4.477v-8.954zm0-10.676l-7.752 4.457V8.848zm0 21.352l-7.752-4.457v8.933zM42.915 24.59l-6.72 3.877v-8.953l6.72 3.875c.47.28.47.942 0 1.202");
}
</style><path class="smlrfssoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:justwatch"} {...others} />);
}

export default Component;
