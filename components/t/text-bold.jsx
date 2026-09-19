import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6g817zjy.css';
import '../../css/k/k3nn7hxsv.css';
import '../../css/y/yto2jk_qy.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="o6g817zjy"><path class="k3nn7hxsv"/><path class="yto2jk_qy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-bold"} {...others} />);
}

export default Component;
