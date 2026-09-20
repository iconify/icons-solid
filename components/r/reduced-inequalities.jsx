import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/a3qy1i52u.css';
import '../../css/m/me7-g1bpg.css';
import '../../css/k/k1en1acng.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="a3qy1i52u"/><path class="me7-g1bpg"/><path class="k1en1acng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:reduced-inequalities"} {...others} />);
}

export default Component;
