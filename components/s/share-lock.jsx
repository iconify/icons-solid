import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tqp073bbf.css';
import '../../css/j/jgr5wab8a.css';
import '../../css/g/gvbb6yb_u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="tqp073bbf"/><path class="jgr5wab8a"/><path class="gvbb6yb_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:share-lock"} {...others} />);
}

export default Component;
