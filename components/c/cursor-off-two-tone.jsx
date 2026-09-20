import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7atk2t4y.css';
import '../../css/x/xrrwywbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g7atk2t4y"/><path class="xrrwywbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-off-two-tone"} {...others} />);
}

export default Component;
