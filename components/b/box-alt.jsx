import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nmbfzp78r.css';
import '../../css/n/n2vefrbse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="nmbfzp78r"/><path class="n2vefrbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box-alt"} {...others} />);
}

export default Component;
