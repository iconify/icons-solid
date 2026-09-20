import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pyk5dibjj.css';
import '../../css/c/cwbz9hv9b.css';
import '../../css/s/s9-lr8ber.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pyk5dibjj"/><path class="cwbz9hv9b"/><path class="s9-lr8ber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shipment-check-flat"} {...others} />);
}

export default Component;
