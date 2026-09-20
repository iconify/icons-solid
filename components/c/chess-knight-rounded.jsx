import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwkjtcrsh {
  fill: currentColor;
  d: path("M7 22q-.825 0-1.412-.587T5 20v-2q0-.575.3-1.037t.8-.738L11 13.75V12l-3.475 1.725q-.3.15-.625.225t-.65.075q-.775 0-1.463-.4t-1.062-1.15q-.35-.675-.3-1.437T3.9 9.625L7 5l-.975-1.45q-.35-.5-.05-1.025t.9-.525H11q3.325 0 5.663 2.325T19 10v10q0 .825-.587 1.413T17 22z");
}
</style><path class="jwkjtcrsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chess-knight-rounded"} {...others} />);
}

export default Component;
