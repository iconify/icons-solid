import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkyewyb6v.css';
import '../../css/q/qc_ff9bmb.css';
import '../../css/j/j51cjnbqm.css';
import '../../css/y/yu9huobvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hkyewyb6v wm-a"/><path class="qc_ff9bmb wm-k"/><path class="j51cjnbqm wm-k"/><path class="wm-k yu9huobvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:palm-tree"} {...others} />);
}

export default Component;
