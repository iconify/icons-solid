import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cjcge5wno.css';
import '../../css/p/p_6q8xbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cjcge5wno"/><path class="p_6q8xbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:list-start"} {...others} />);
}

export default Component;
