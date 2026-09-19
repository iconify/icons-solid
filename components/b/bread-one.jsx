import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/uf6h1sbvi.css';
import '../../css/w/wz5-7lbeo.css';
import '../../css/r/retl8lbug.css';
import '../../css/p/p9sb0nbgq.css';
import '../../css/i/icuw8dbmt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="uf6h1sbvi"/><path class="wz5-7lbeo"/><path class="retl8lbug"/><path class="p9sb0nbgq"/><path class="icuw8dbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bread-one"} {...others} />);
}

export default Component;
