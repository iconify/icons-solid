import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsjo5acyy.css';
import '../../css/t/ttbk3nb0v.css';
import '../../css/d/doj_-lcem.css';
import '../../css/n/n_2mp4b-m.css';
import '../../css/z/zlz1aobqr.css';
import '../../css/r/r7l6t9gds.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wsjo5acyy"/><path class="ttbk3nb0v"/><circle class="doj_-lcem"/><circle class="n_2mp4b-m"/><path class="zlz1aobqr"/><path class="r7l6t9gds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:multiple-cameras"} {...others} />);
}

export default Component;
