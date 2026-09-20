import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/p/p9vjoqtlo.css';
import '../../css/u/u8b1jwb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="xtsrmvj7o"/><circle class="p9vjoqtlo"/><path class="u8b1jwb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:diameter"} {...others} />);
}

export default Component;
