import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dx4lj_blu.css';
import '../../css/r/rvvxedcli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dx4lj_blu"/><path class="rvvxedcli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:lock-keyhole-open"} {...others} />);
}

export default Component;
