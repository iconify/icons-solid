import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vdkj3yk3r.css';
import '../../css/b/bq9iuqbqy.css';
import '../../css/o/oh8-yacve.css';
import '../../css/n/n8o_jib3f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="vdkj3yk3r"/><circle class="bq9iuqbqy"/><path class="oh8-yacve"/><path class="n8o_jib3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:flip-camera"} {...others} />);
}

export default Component;
