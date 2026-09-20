import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/idk6blnlg.css';
import '../../css/q/qtxsezbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="idk6blnlg"/><circle class="qtxsezbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sparkles"} {...others} />);
}

export default Component;
