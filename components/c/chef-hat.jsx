import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozu8-riqn.css';
import '../../css/s/snz624yyq.css';
import '../../css/e/eikrn6b5k.css';
import '../../css/g/gvw7aj9zw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ozu8-riqn"/><path class="snz624yyq"/><path class="eikrn6b5k"/><path class="gvw7aj9zw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chef-hat"} {...others} />);
}

export default Component;
