import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.albikqbom {
  d: path("M10 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.f91zpx8rd {
  fill-rule: evenodd;
  d: path("M15 8H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M5 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z");
}

.pgdgbrbtm {
  fill-rule: evenodd;
  d: path("M14.67 1.665a.75.75 0 0 1-.335 1.006l-10 5a.75.75 0 0 1-.67-1.342l10-5a.75.75 0 0 1 1.006.336M11 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="f91zpx8rd"/><path class="albikqbom"/><path clip-rule="evenodd" class="pgdgbrbtm"/><path class="xedf9ccsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:radio-off"} {...others} />);
}

export default Component;
