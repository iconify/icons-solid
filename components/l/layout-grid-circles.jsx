import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bf9_qabtn.css';
import '../../css/s/sk7rahmof.css';
import '../../css/y/yphewc7qd.css';
import '../../css/t/t-7lz5bmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="bf9_qabtn"/><circle class="sk7rahmof"/><circle class="yphewc7qd"/><circle class="t-7lz5bmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:layout-grid-circles"} {...others} />);
}

export default Component;
