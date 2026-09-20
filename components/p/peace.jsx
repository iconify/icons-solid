import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/k/kppphc2fq.css';
import '../../css/x/x-6so0btp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="kppphc2fq"/><path class="x-6so0btp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:peace"} {...others} />);
}

export default Component;
