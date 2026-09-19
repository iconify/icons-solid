import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cv_w504ff.css';
import '../../css/s/spmnadb4p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="cv_w504ff"/><path class="spmnadb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ella"} {...others} />);
}

export default Component;
