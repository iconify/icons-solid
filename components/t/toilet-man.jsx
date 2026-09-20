import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yj54-sb_b.css';
import '../../css/z/zbfk9hb2n.css';
import '../../css/a/a88hqgnix.css';
import '../../css/v/ve-3bzo3n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yj54-sb_b"/><path class="zbfk9hb2n"/><path class="a88hqgnix"/><path class="ve-3bzo3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:toilet-man"} {...others} />);
}

export default Component;
