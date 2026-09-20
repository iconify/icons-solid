import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdpfzv4oy.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fzgukmboj.css';
import '../../css/g/gahp4sboa.css';
import '../../css/o/ofh7aqbnk.css';

const viewBox = {"width":1200,"height":500};
const content = `<path class="fdpfzv4oy"/><g class="n1mjunbsu"><path class="fzgukmboj"/><path class="gahp4sboa"/></g><path class="ofh7aqbnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:webgl-dark"} {...others} />);
}

export default Component;
