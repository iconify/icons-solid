import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pod8qhbpj.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/p/p9vjoqtlo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pod8qhbpj"/><circle class="xtsrmvj7o"/><circle class="p9vjoqtlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scale-3d"} {...others} />);
}

export default Component;
