import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/noi39ablo.css';
import '../../css/y/y6rd1hn2l.css';
import '../../css/u/ulojppa_a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="noi39ablo"/><path class="y6rd1hn2l"/><path class="ulojppa_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:safe-vault"} {...others} />);
}

export default Component;
