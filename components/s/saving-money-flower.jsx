import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3eau-cdt.css';
import '../../css/g/gvq-5ifuu.css';
import '../../css/c/cykaa7b7n.css';
import '../../css/x/x2ffd7b0q.css';
import '../../css/z/z-f7qjbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v3eau-cdt"/><path class="gvq-5ifuu"/><path class="cykaa7b7n"/><path class="x2ffd7b0q"/><path class="z-f7qjbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:saving-money-flower"} {...others} />);
}

export default Component;
