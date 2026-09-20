import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/inqsumbbb.css';
import '../../css/k/kq3uvdbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="inqsumbbb"/><path class="kq3uvdbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-direkte-notlive"} {...others} />);
}

export default Component;
