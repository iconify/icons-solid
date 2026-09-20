import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/dbnfz_gma.css';
import '../../css/z/zmb_vebjz.css';
import '../../css/q/q077_m7iv.css';
import '../../css/v/vcwvqacgo.css';
import '../../css/z/zlioapl2i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="dbnfz_gma"/><path class="zmb_vebjz"/><path class="q077_m7iv"/><path class="vcwvqacgo"/><path class="zlioapl2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:contact-phonebook"} {...others} />);
}

export default Component;
