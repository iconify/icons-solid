import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hfqqtdbyx.css';
import '../../css/a/afsdp6fkc.css';
import '../../css/t/t3w8yqyck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hfqqtdbyx"/><path class="afsdp6fkc"/><path class="t3w8yqyck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:floppy-disks"} {...others} />);
}

export default Component;
