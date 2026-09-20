import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/a/aeyojhj1q.css';
import '../../css/l/liewl6bve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="aeyojhj1q"/><path class="liewl6bve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-copy"} {...others} />);
}

export default Component;
