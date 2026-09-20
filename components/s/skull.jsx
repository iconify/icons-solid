import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ozqitpbxk.css';
import '../../css/l/l5xombbjt.css';
import '../../css/w/w6g5yhqkl.css';
import '../../css/i/inewx5b5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ozqitpbxk"/><path class="l5xombbjt"/><circle class="w6g5yhqkl"/><circle class="inewx5b5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:skull"} {...others} />);
}

export default Component;
