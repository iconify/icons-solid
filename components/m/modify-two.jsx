import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f22wqelib.css';
import '../../css/l/l7q0ip_gf.css';
import '../../css/r/rx9asmbnf.css';
import '../../css/z/z5ec-kbwe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="f22wqelib"/><path class="l7q0ip_gf"/><path class="rx9asmbnf"/><path class="z5ec-kbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:modify-two"} {...others} />);
}

export default Component;
