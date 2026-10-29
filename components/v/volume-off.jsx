import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlzdue8eu.css';
import '../../css/u/uibgwrabt.css';
import '../../css/a/a2mdgrbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qlzdue8eu wm-k"/><path class="uibgwrabt wm-k"/><path class="a2mdgrbxu wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:volume-off"} {...others} />);
}

export default Component;
