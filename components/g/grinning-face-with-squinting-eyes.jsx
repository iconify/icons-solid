import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/q/q8fynub3l.css';
import '../../css/k/kk71b4b6e.css';
import '../../css/j/jh191sqqi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="q8fynub3l"/><path class="kk71b4b6e"/><path class="jh191sqqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:grinning-face-with-squinting-eyes"} {...others} />);
}

export default Component;
