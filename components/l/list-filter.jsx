import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qhx4xob4l.css';
import '../../css/v/vm2vtkjkc.css';
import '../../css/k/k5xu09njj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="qhx4xob4l"/><path class="vm2vtkjkc"/><path class="k5xu09njj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:list-filter"} {...others} />);
}

export default Component;
