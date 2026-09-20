import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/h/hf2khubtm.css';
import '../../css/q/q_-r6evst.css';
import '../../css/e/epeoqrbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="hf2khubtm"/><path class="q_-r6evst"/><path class="epeoqrbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cheese"} {...others} />);
}

export default Component;
