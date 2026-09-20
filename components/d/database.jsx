import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1u9eup1x.css';
import '../../css/g/g1t8-pt8s.css';
import '../../css/x/xtpog-qyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j1u9eup1x"/><path class="g1t8-pt8s"/><path class="xtpog-qyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:database"} {...others} />);
}

export default Component;
