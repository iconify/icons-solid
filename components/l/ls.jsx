import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nw7rk_lec.css';
import '../../css/r/rkats6bfp.css';
import '../../css/c/c-wu24bqc.css';
import '../../css/o/ocyyo8bxi.css';

const viewBox = {"width":300,"height":200};
const content = `<g class="bi12bsetm"><path class="nw7rk_lec"/><path class="rkats6bfp"/><path class="c-wu24bqc"/><path class="ocyyo8bxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ls"} {...others} />);
}

export default Component;
