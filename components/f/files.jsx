import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9v87ubhi.css';
import '../../css/n/nby2y85sw.css';
import '../../css/v/vs2eg7bji.css';
import '../../css/f/fp_fcybsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g9v87ubhi"/><path class="nby2y85sw"/><path class="vs2eg7bji"/><path class="fp_fcybsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:files"} {...others} />);
}

export default Component;
