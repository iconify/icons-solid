import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g6k77kbns.css';
import '../../css/x/x-k3sknjq.css';
import '../../css/b/brqbnxbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g6k77kbns"/><path class="x-k3sknjq"/><path class="brqbnxbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shopping-cart-trolley-upload"} {...others} />);
}

export default Component;
