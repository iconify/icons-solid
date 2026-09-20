import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hz3ugwbtm.css';
import '../../css/o/oqy67qbzl.css';
import '../../css/d/d54xwq8av.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hz3ugwbtm"/><path class="oqy67qbzl"/><path class="d54xwq8av"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-workstation"} {...others} />);
}

export default Component;
