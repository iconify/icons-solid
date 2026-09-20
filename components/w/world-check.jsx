import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/on--nbb5v.css';
import '../../css/y/ydaelo_4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="on--nbb5v"/><path class="ydaelo_4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-check"} {...others} />);
}

export default Component;
