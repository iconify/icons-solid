import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jc_7zfapj.css';
import '../../css/w/wber-hsua.css';
import '../../css/o/ope6mwbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jc_7zfapj"/><path class="wber-hsua"/><path class="ope6mwbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-not-found-02"} {...others} />);
}

export default Component;
