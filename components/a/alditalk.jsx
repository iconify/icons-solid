import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.okoiy4b2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.73 12.33v9.74h4.87m1.38 3.86v9.74h4.88m6.54-23.34v9.74m-9.62.02v-9.77h1.66a4.88 4.88 0 0 1 4.89 4.88h0a4.89 4.89 0 0 1-4.89 4.89ZM9.55 25.92h7.36m-3.68 9.75v-9.75m20.35-.02v9.78m1.26-4.89l3.61-4.85m-3.61 4.85l3.61 4.9m-3.61-4.9h-1.26M10.3 22.07l3.27-9.77m3.14 9.8l-3.14-9.8m2.09 6.52h-4.27m5.18 16.85l3.27-9.77m3.14 9.8l-3.14-9.8m2.09 6.52h-4.27");
}

.xw8leeb0i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.5 5.5a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z");
}
</style><path class="okoiy4b2l"/><path class="xw8leeb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:alditalk"} {...others} />);
}

export default Component;
