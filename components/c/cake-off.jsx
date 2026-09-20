import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fkpmhdl7z.css';
import '../../css/j/jynbi7e4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fkpmhdl7z"/><path class="jynbi7e4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cake-off"} {...others} />);
}

export default Component;
