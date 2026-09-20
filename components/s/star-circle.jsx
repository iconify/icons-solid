import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xuh7znbmb.css';
import '../../css/i/iyfuk0bxi.css';
import '../../css/a/a3a7kvl8j.css';
import '../../css/y/y68jbfbua.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="xuh7znbmb"/><path class="iyfuk0bxi"/><path class="a3a7kvl8j"/><path class="y68jbfbua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:star-circle"} {...others} />);
}

export default Component;
