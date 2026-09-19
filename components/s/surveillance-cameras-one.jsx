import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/g/g7lpxxbmh.css';
import '../../css/l/lo1qem4dc.css';
import '../../css/h/h8tqvyb5j.css';
import '../../css/b/b64n8bc3q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="g7lpxxbmh"/><path class="lo1qem4dc"/><path class="h8tqvyb5j"/><path class="b64n8bc3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:surveillance-cameras-one"} {...others} />);
}

export default Component;
