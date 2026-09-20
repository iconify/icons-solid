import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjkn4dkhv.css';
import '../../css/l/lqbt8yntn.css';
import '../../css/h/huyefibpi.css';
import '../../css/u/u8i52477k.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xjkn4dkhv"/><path class="lqbt8yntn"/><path class="huyefibpi"/><path class="u8i52477k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:accounting-invoice-mail"} {...others} />);
}

export default Component;
