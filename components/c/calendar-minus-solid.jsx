import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/g/go62nyfcr.css';
import '../../css/k/k91suv-ws.css';
import '../../css/i/icsy_rbek.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="go62nyfcr"/><path class="k91suv-ws"/><path class="icsy_rbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:calendar-minus-solid"} {...others} />);
}

export default Component;
