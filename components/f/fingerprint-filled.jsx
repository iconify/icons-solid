import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wz97-nbxy.css';
import '../../css/j/jjnilixeo.css';
import '../../css/s/sdkjm1bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wz97-nbxy"/><path class="jjnilixeo"/><path class="sdkjm1bzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:fingerprint-filled"} {...others} />);
}

export default Component;
