import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z6eswjbsp.css';
import '../../css/p/pvksh5_ap.css';
import '../../css/h/h6pfvubgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z6eswjbsp"/><path class="pvksh5_ap"/><path class="h6pfvubgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:floppy-disk"} {...others} />);
}

export default Component;
