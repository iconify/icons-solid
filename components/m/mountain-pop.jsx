import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/n/nvfw2jb6u.css';
import '../../css/l/l8yynixuh.css';
import '../../css/h/hzby-pbul.css';
import '../../css/f/fgs4w3bos.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="nvfw2jb6u"/><path class="l8yynixuh"/><path class="hzby-pbul"/><path class="fgs4w3bos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:mountain-pop"} {...others} />);
}

export default Component;
