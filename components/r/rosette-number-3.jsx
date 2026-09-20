import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nxkc1msfk.css';
import '../../css/o/oogc20b8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nxkc1msfk"/><path class="oogc20b8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rosette-number-3"} {...others} />);
}

export default Component;
