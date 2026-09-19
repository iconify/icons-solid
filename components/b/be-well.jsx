import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iv2vw8q-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 26.692c0-7.18 5.82-13 13-13s13 5.82 13 13s-5.82 13-13 13h-13z");
}

.l9hmjgifv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.308 30.5c-5.077-5.077-5.077-13.308 0-18.385c5.076-5.076 13.308-5.076 18.384 0c5.077 5.077 5.077 13.308 0 18.385L17.5 39.692z");
}
</style><path class="iv2vw8q-z"/><path class="l9hmjgifv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:be-well"} {...others} />);
}

export default Component;
