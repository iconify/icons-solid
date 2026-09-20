import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lqufc9bvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.38 34.75v-21.5l13.965-8.062a9.31 9.31 0 0 1 9.31 0L42.62 13.25v21.5L24 45.5l-12.415-7.168M5.382 13.248l12.412 7.168M24 24l18.62-10.748M5.38 24l9.31 5.375");
}
</style><path class="lqufc9bvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:furgonetka"} {...others} />);
}

export default Component;
