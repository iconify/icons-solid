import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/j/jjxfjgbcs.css';
import '../../css/v/vpr5xac0l.css';
import '../../css/b/b-nlqbjlj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="j9hg1or3h"/><path class="jjxfjgbcs"/><path class="vpr5xac0l"/><path class="b-nlqbjlj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:museum-two"} {...others} />);
}

export default Component;
