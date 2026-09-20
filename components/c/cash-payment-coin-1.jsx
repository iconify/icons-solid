import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/za2nmiyjb.css';
import '../../css/l/lzhkln8wf.css';
import '../../css/d/dscqektuk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="za2nmiyjb"/><path class="lzhkln8wf"/><path class="dscqektuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cash-payment-coin-1"} {...others} />);
}

export default Component;
