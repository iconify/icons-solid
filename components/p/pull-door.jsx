import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gbwgqsbsu.css';
import '../../css/n/nw7f38p0f.css';
import '../../css/d/dq9l1yu4e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="gbwgqsbsu"/><path class="nw7f38p0f"/><path class="dq9l1yu4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pull-door"} {...others} />);
}

export default Component;
