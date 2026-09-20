import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/p-y7x05xz.css';
import '../../css/n/nssru97re.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="p-y7x05xz"/><path class="nssru97re"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:printer"} {...others} />);
}

export default Component;
