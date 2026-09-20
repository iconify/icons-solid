import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hj-ui1b9a.css';
import '../../css/e/ecknynbrw.css';
import '../../css/u/uxyxgac4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="hj-ui1b9a"/><path class="ecknynbrw"/><path class="uxyxgac4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:file-dock-add"} {...others} />);
}

export default Component;
