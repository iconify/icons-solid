import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgl5aikqu.css';
import '../../css/h/ho53ytlhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xgl5aikqu"/><path class="ho53ytlhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dashboard"} {...others} />);
}

export default Component;
