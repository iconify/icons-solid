import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b70_v8m2q.css';
import '../../css/p/p1sjor0su.css';
import '../../css/w/wvbjc1o2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b70_v8m2q"/><circle class="p1sjor0su"/><path class="wvbjc1o2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:floppy-disks-rear"} {...others} />);
}

export default Component;
