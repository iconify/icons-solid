import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zcrcylsxu.css';
import '../../css/s/sz56l5okf.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/u/utwkxsota.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="zcrcylsxu"/><path class="sz56l5okf"/><circle class="dos_yhbgg"/><path class="utwkxsota"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scissors"} {...others} />);
}

export default Component;
