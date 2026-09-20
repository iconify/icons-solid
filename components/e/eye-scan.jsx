import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ko5lcq0hn.css';
import '../../css/a/actkwtdjy.css';
import '../../css/g/ga_jcgb2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ko5lcq0hn"/><path clip-rule="evenodd" class="actkwtdjy"/><path clip-rule="evenodd" class="ga_jcgb2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:eye-scan"} {...others} />);
}

export default Component;
