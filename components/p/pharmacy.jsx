import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/h/h56qdhbsd.css';
import '../../css/l/lfpfzkb3s.css';
import '../../css/x/xg5z2wbhp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="h56qdhbsd"/><path class="lfpfzkb3s"/><path class="xg5z2wbhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pharmacy"} {...others} />);
}

export default Component;
