import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgg9nrbuq.css';
import '../../css/z/zedf9pzpz.css';
import '../../css/p/pj_ax6bww.css';
import '../../css/k/kcm6f8bof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zgg9nrbuq"/><path class="zedf9pzpz"/><path class="pj_ax6bww"/><path class="kcm6f8bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:briefcase"} {...others} />);
}

export default Component;
