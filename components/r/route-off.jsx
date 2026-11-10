import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y450z3kjf.css';
import '../../css/q/qhvjurbel.css';
import '../../css/g/g9i1nab0y.css';
import '../../css/t/tytd08b7c.css';
import '../../css/m/m2reyv_4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="y450z3kjf"/><circle class="qhvjurbel"/><circle class="g9i1nab0y"/><circle class="tytd08b7c"/><path class="m2reyv_4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:route-off"} {...others} />);
}

export default Component;
