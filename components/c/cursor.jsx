import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxulc0b-v.css';
import '../../css/f/f5ycauqfx.css';
import '../../css/w/w04a47bfu.css';
import '../../css/a/a6rdej4jn.css';
import '../../css/c/c312edkkm.css';
import '../../css/j/jcsfj056r.css';
import '../../css/a/a6cae7uze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lxulc0b-v wm-a"/><path class="f5ycauqfx wm-a"/><path class="w04a47bfu wm-a"/><path class="a6rdej4jn wm-k"/><path class="c312edkkm wm-k"/><path class="jcsfj056r wm-k"/><path class="a6cae7uze wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cursor"} {...others} />);
}

export default Component;
