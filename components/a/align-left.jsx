import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cwpkoubta.css';
import '../../css/e/egwsdufji.css';
import '../../css/e/e505by-fl.css';
import '../../css/r/r4lr0sp0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="cwpkoubta"/><path class="egwsdufji"/><path class="e505by-fl"/><path class="r4lr0sp0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:align-left"} {...others} />);
}

export default Component;
