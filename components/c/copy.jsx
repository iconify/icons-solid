import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/ppalc37cs.css';
import '../../css/o/or9favb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ppalc37cs"/><path class="or9favb6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:copy"} {...others} />);
}

export default Component;
