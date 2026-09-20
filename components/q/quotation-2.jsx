import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xqeh83b7f.css';
import '../../css/o/oj963qb8m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="xqeh83b7f"/><path class="oj963qb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:quotation-2"} {...others} />);
}

export default Component;
