import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f2yqqib5f.css';
import '../../css/x/xvdfgms8f.css';
import '../../css/i/ide5axbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f2yqqib5f"/><path class="xvdfgms8f"/><circle class="ide5axbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:id-card-lanyard"} {...others} />);
}

export default Component;
