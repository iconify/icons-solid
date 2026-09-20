import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sury3b-zu.css';
import '../../css/w/w_iz3k4gm.css';
import '../../css/c/cjn1osbna.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="sury3b-zu"><path class="w_iz3k4gm"/><path class="cjn1osbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:uiua"} {...others} />);
}

export default Component;
