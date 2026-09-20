import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owmm25bsk.css';
import '../../css/v/v8sc8rzsp.css';
import '../../css/m/meey0ablw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="owmm25bsk"/><path class="v8sc8rzsp"/><path class="meey0ablw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cursor"} {...others} />);
}

export default Component;
