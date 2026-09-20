import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/semfdcbfd.css';
import '../../css/z/z_i1yho6m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="semfdcbfd"/><path class="z_i1yho6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hierarchy-1"} {...others} />);
}

export default Component;
