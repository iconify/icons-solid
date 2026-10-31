import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pybwm1bqb.css';
import '../../css/g/g344u5m-h.css';
import '../../css/b/b59s3z9lw.css';
import '../../css/l/la1njcbhy.css';
import '../../css/e/eobre3b8e.css';
import '../../css/n/n-l9jbc2i.css';
import '../../css/x/x6unqaccj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="pybwm1bqb"/><path class="g344u5m-h"/><path class="b59s3z9lw wm-shine"/><path class="la1njcbhy wm-k"/><path class="eobre3b8e wm-a"/><path class="n-l9jbc2i"/><path class="x6unqaccj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pencil-ruler"} {...others} />);
}

export default Component;
