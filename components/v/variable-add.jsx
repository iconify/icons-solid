import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pmdpcubuu {
  fill: currentColor;
  d: path("M3 17V7h18v3.075q-.25-.05-.488-.062T20 10q-2.5 0-4.25 1.75T14 16q0 .275.013.513t.062.487zm16 3v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="pmdpcubuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:variable-add"} {...others} />);
}

export default Component;
