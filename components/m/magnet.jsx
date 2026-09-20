import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v0zg4ab8h.css';
import '../../css/y/ya5guhb6t.css';
import '../../css/i/ixl_lxadt.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v0zg4ab8h"/><path class="ya5guhb6t"/><path class="ixl_lxadt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:magnet"} {...others} />);
}

export default Component;
