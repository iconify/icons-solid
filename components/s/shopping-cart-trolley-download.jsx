import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d64aytbpv.css';
import '../../css/r/rqxh9mzju.css';
import '../../css/u/ubjfz4bbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="d64aytbpv"/><path class="rqxh9mzju"/><path class="ubjfz4bbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shopping-cart-trolley-download"} {...others} />);
}

export default Component;
