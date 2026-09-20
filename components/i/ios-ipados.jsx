import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkgw9db5l.css';
import '../../css/g/gt-02fbkp.css';
import '../../css/q/qprbuwhio.css';
import '../../css/d/di72ap18h.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tkgw9db5l"/><path class="gt-02fbkp"/><path class="qprbuwhio"/><path class="di72ap18h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:ios-ipados"} {...others} />);
}

export default Component;
