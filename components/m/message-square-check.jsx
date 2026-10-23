import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bub8fgbgp.css';
import '../../css/g/g32prqiqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bub8fgbgp"/><path class="g32prqiqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:message-square-check"} {...others} />);
}

export default Component;
