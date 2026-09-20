import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/u/uhlhzujjg.css';
import '../../css/p/pkwdlrb9z.css';
import '../../css/g/gyi273b3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="uhlhzujjg"/><path class="pkwdlrb9z"/><path class="gyi273b3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:save"} {...others} />);
}

export default Component;
