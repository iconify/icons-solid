import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/a/acr0mwb8s.css';
import '../../css/o/olwzdbbel.css';
import '../../css/g/ghy3hrbbw.css';
import '../../css/z/z8s6peivs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="acr0mwb8s"/><path class="olwzdbbel"/><path class="ghy3hrbbw"/><path class="z8s6peivs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:message"} {...others} />);
}

export default Component;
