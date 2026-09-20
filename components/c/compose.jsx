import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ojqc5kbbb.css';
import '../../css/q/qsns_6sgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ojqc5kbbb"/><path class="qsns_6sgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:compose"} {...others} />);
}

export default Component;
