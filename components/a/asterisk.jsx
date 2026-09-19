import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/u/uep8lf9wr.css';
import '../../css/h/h8jldv8sr.css';
import '../../css/e/enb5j67in.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="y6f0jibvm"/><path class="uep8lf9wr"/><path class="h8jldv8sr"/><path class="enb5j67in"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:asterisk"} {...others} />);
}

export default Component;
