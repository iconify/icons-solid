import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q96ok-8ie.css';
import '../../css/v/vt_azwhya.css';
import '../../css/b/bj1lwnbio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q96ok-8ie"/><rect class="vt_azwhya"/><path class="bj1lwnbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:shirt-t-ruler"} {...others} />);
}

export default Component;
