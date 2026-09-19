import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/h-kuz0-bd.css';
import '../../css/a/atkbl1bju.css';
import '../../css/x/x7wvjfqef.css';
import '../../css/p/p4ej8tn4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="h-kuz0-bd"/><path class="atkbl1bju"/><path class="x7wvjfqef"/><path class="p4ej8tn4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gold-medal"} {...others} />);
}

export default Component;
