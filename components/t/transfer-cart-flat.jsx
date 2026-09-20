import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/ltfqsqjkt.css';
import '../../css/d/dtuk-4b7n.css';
import '../../css/z/z9aamlbis.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ltfqsqjkt"/><path class="dtuk-4b7n"/><path class="z9aamlbis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:transfer-cart-flat"} {...others} />);
}

export default Component;
