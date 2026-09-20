import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1xxvtxsv.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/o/oq52ejiws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b1xxvtxsv"/><circle class="h_tsn8bxt"/><path class="oq52ejiws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:money-plus-line"} {...others} />);
}

export default Component;
