import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uh9b8ab7s.css';
import '../../css/a/agvr31nlx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uh9b8ab7s"/><path class="agvr31nlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:locate-fixed"} {...others} />);
}

export default Component;
