import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du2s2hbvi.css';
import '../../css/p/p6bj_kbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="du2s2hbvi"/><path class="p6bj_kbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shape-pyramid"} {...others} />);
}

export default Component;
