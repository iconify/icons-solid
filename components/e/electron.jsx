import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqcd_1b7g.css';
import '../../css/o/oiny4j3cd.css';
import '../../css/o/onmyc1b4h.css';
import '../../css/w/w-cmwjbvu.css';
import '../../css/w/wqndocb7y.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cqcd_1b7g"><path class="oiny4j3cd"/><path class="onmyc1b4h"/><path class="w-cmwjbvu"/><path class="wqndocb7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:electron"} {...others} />);
}

export default Component;
