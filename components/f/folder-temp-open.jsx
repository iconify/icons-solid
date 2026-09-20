import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls8n74bvk.css';
import '../../css/z/zj4ty50ji.css';
import '../../css/i/ihz108blo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ls8n74bvk"/><path class="zj4ty50ji"/><path class="ihz108blo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-temp-open"} {...others} />);
}

export default Component;
