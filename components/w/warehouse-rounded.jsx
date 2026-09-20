import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oh7huqbcl {
  fill: currentColor;
  d: path("M2 19V8.35q0-.625.338-1.125T3.25 6.5l8-3.2q.35-.15.75-.15t.75.15l8 3.2q.575.225.913.725T22 8.35V19q0 .825-.587 1.413T20 21h-4v-8H8v8H4q-.825 0-1.412-.587T2 19m7 2v-2h2v2zm2-3v-2h2v2zm2 3v-2h2v2z");
}
</style><path class="oh7huqbcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:warehouse-rounded"} {...others} />);
}

export default Component;
