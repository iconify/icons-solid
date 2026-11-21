import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nfsagab1l.css';
import '../../css/e/elti8xbhv.css';
import '../../css/u/u8u9_5smu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nfsagab1l"/><circle class="elti8xbhv"/><rect class="u8u9_5smu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clipboard-clock"} {...others} />);
}

export default Component;
