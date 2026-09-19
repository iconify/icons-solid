import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy3p094dk.css';
import '../../css/j/j_7wf_9wv.css';
import '../../css/d/dk5jy9x_q.css';
import '../../css/m/mf_n5zbhj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jy3p094dk"/><path class="j_7wf_9wv"/><path class="dk5jy9x_q"/><path class="mf_n5zbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:stress-breath-editor"} {...others} />);
}

export default Component;
