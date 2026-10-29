import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uwvpw8bjb.css';
import '../../css/v/v7z8jubih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="uwvpw8bjb"/><path class="v7z8jubih wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-output-solid"} {...others} />);
}

export default Component;
