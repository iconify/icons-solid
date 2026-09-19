import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/v/vh3ue14js.css';
import '../../css/e/e8goxlb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="vh3ue14js"/><path class="e8goxlb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:incognito"} {...others} />);
}

export default Component;
