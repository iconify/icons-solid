import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/g/g2ejjjb6o.css';
import '../../css/d/d069zccvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="g2ejjjb6o"/><path class="d069zccvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sound-min"} {...others} />);
}

export default Component;
