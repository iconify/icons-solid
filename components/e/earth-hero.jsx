import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kklkypbbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 23.936c.038 10.91-9.378 19.649-20.543 18.455C13.471 41.483 6.59 34.65 5.624 26.17C4.353 15.014 13.024 5.538 23.936 5.5H42.5z");
}

.p4wl0qb7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.602 23.97c.018 5.316-4.788 9.52-10.3 8.47c-3.355-.64-6.067-3.334-6.73-6.686c-1.089-5.503 3.084-10.338 8.399-10.356h8.63z");
}
</style><path class="kklkypbbg"/><path class="p4wl0qb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:earth-hero"} {...others} />);
}

export default Component;
