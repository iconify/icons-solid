import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bw27wgbqm.css';
import '../../css/c/cazmiub8o.css';
import '../../css/d/dq9l1yu4e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="bw27wgbqm"/><path class="cazmiub8o"/><path class="dq9l1yu4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:push-door"} {...others} />);
}

export default Component;
