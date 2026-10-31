import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uax7j3gsp.css';
import '../../css/x/x0mx6shao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uax7j3gsp"/><path class="x0mx6shao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skip-forward-duocolor-round"} {...others} />);
}

export default Component;
