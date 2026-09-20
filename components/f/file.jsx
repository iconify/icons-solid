import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qgeq1yd2g.css';
import '../../css/g/g1h9-5bhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="qgeq1yd2g"/><path class="g1h9-5bhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:file"} {...others} />);
}

export default Component;
