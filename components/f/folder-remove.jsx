import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r9v6skglr.css';
import '../../css/a/apyn4nbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="r9v6skglr"/><path class="apyn4nbgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:folder-remove"} {...others} />);
}

export default Component;
