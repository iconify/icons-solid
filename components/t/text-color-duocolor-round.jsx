import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tiw-5jboz.css';
import '../../css/x/xscvtn6oj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tiw-5jboz"/><path class="xscvtn6oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-color-duocolor-round"} {...others} />);
}

export default Component;
