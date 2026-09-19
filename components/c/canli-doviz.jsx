import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.acs4qy-ci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.94 8.989a2.244 2.244 0 0 1-.008-4.489h9.218a2.244 2.244 0 0 1 2.244 2.244v9.202a2.244 2.244 0 0 1-4.488 0v-2.574L17.897 26.381a3.1 3.1 0 1 1-4.383-4.384L26.522 8.99h-2.574m.112 30.021a2.244 2.244 0 0 1 .008 4.489H14.85a2.244 2.244 0 0 1-2.244-2.244v-9.202a2.244 2.244 0 0 1 4.488 0v2.574l13.009-13.009a3.1 3.1 0 1 1 4.383 4.384L21.478 39.01h2.574");
}
</style><path class="acs4qy-ci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:canli-doviz"} {...others} />);
}

export default Component;
