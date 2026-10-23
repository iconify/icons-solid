import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypbg_2eib.css';
import '../../css/o/ogn2p55wg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ypbg_2eib"/><path class="ogn2p55wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:park"} {...others} />);
}

export default Component;
