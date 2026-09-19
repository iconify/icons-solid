import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.epr_kxshy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.558 19.437c-.445-7.336-6.585-13.18-13.989-13.18c-7.767 0-14.069 6.246-14.069 14.031c0 3.73 1.462 7.18 3.944 9.696l9.272-10.547H33.56z");
}

.fp1l3--1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.651 41.743H42.5v-11.68L33.553 19.44l-8.906 10.623v11.68h.006z");
}
</style><path class="fp1l3--1w"/><path class="epr_kxshy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nationwide"} {...others} />);
}

export default Component;
