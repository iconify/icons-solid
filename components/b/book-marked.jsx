import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jk1_rvyxp.css';
import '../../css/o/ot8yzyb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jk1_rvyxp"/><path class="ot8yzyb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-marked"} {...others} />);
}

export default Component;
