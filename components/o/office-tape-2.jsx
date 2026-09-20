import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hnn_jcvfl.css';
import '../../css/a/aoudi8bmh.css';
import '../../css/c/cnwvl_anw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hnn_jcvfl"/><path class="aoudi8bmh"/><path class="cnwvl_anw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:office-tape-2"} {...others} />);
}

export default Component;
