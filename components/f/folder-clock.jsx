import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gximn1b4y.css';
import '../../css/e/elti8xbhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gximn1b4y"/><circle class="elti8xbhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-clock"} {...others} />);
}

export default Component;
