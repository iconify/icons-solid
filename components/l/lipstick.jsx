import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/k/ks0qo9bbe.css';
import '../../css/v/vorlg-byp.css';
import '../../css/y/yeb121b_t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="ks0qo9bbe"/><path class="vorlg-byp"/><path class="yeb121b_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:lipstick"} {...others} />);
}

export default Component;
