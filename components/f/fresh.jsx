import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrr2chbzu.css';
import '../../css/q/qnolq6bsx.css';
import '../../css/m/mmiewcbui.css';
import '../../css/b/btlnj5b2x.css';
import '../../css/h/hp0f-gb7s.css';

const viewBox = {"width":256,"height":216};
const content = `<path class="wrr2chbzu"/><path class="qnolq6bsx"/><path class="mmiewcbui"/><path class="btlnj5b2x"/><path class="hp0f-gb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fresh"} {...others} />);
}

export default Component;
