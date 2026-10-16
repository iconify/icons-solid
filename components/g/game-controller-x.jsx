import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgyvohp4q.css';
import '../../css/z/zua3n3brj.css';
import '../../css/k/kb9ry10cf.css';
import '../../css/a/aqfad6b-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dgyvohp4q"/><path class="zua3n3brj"/><path class="kb9ry10cf"/><path class="aqfad6b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:game-controller-x"} {...others} />);
}

export default Component;
