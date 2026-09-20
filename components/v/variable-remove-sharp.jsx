import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xicif-b5d {
  fill: currentColor;
  d: path("M4 16V8h16v2.123q-.177-.042-.36-.054q-.182-.011-.37-.011q-2.16 0-3.686 1.523t-1.526 3.688q0 .189.011.371q.012.183.054.36zm13.15 2.096l-.708-.707l2.12-2.12l-2.12-2.119l.708-.708l2.12 2.12l2.119-2.12l.707.708l-2.113 2.12l2.113 2.119l-.707.707l-2.12-2.113z");
}
</style><path class="xicif-b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:variable-remove-sharp"} {...others} />);
}

export default Component;
