import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y59_sl96v.css';
import '../../css/u/umfrd_4mw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y59_sl96v"/><path class="umfrd_4mw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-down"} {...others} />);
}

export default Component;
