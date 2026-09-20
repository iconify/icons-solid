import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/snhkzacuz.css';
import '../../css/p/pw2bdqbiz.css';
import '../../css/q/qagp5abqd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="snhkzacuz"/><path class="pw2bdqbiz"/><path class="qagp5abqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:painting-board"} {...others} />);
}

export default Component;
