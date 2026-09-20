import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qyls5gb_b.css';
import '../../css/x/xej79-bhm.css';
import '../../css/f/fju8uwbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qyls5gb_b"/><path class="xej79-bhm"/><path class="fju8uwbfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:mobile-shopping-shop-basket"} {...others} />);
}

export default Component;
