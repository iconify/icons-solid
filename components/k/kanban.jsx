import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqq7tyroa.css';
import '../../css/w/wfoh4bi6o.css';
import '../../css/g/gwjuwnvnc.css';
import '../../css/y/y77-atbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jqq7tyroa wm-k"/><path class="wfoh4bi6o wm-a"/><path class="gwjuwnvnc wm-a"/><path class="wm-a y77-atbyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:kanban"} {...others} />);
}

export default Component;
