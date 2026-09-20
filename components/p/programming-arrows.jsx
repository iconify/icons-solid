import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zfuptwb7a.css';
import '../../css/s/sui1ldz4f.css';
import '../../css/y/yxxwgrb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zfuptwb7a"/><path class="sui1ldz4f"/><path class="yxxwgrb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:programming-arrows"} {...others} />);
}

export default Component;
