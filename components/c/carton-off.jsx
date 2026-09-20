import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pl2c4ij9x.css';
import '../../css/b/b50pvdbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pl2c4ij9x"/><path class="b50pvdbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:carton-off"} {...others} />);
}

export default Component;
