import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lcyf-c5zn.css';
import '../../css/l/ll9sdtbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="lcyf-c5zn"/><path class="ll9sdtbux wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tooth-crown-solid"} {...others} />);
}

export default Component;
