import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/ceu6ypbbo.css';
import '../../css/c/cor_1wsgy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ceu6ypbbo"/><path class="cor_1wsgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:electric-cord-1"} {...others} />);
}

export default Component;
