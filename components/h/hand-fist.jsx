import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqbr1gxvc.css';
import '../../css/z/zqlhvf7zu.css';
import '../../css/o/o6i7zhb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eqbr1gxvc"/><path class="zqlhvf7zu"/><path class="o6i7zhb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-fist"} {...others} />);
}

export default Component;
