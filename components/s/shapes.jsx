import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dy58obbqm.css';
import '../../css/v/velahuttd.css';
import '../../css/b/bf9_qabtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dy58obbqm"/><rect class="velahuttd"/><circle class="bf9_qabtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shapes"} {...others} />);
}

export default Component;
