import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/waihcp8bs.css';
import '../../css/p/p9lrksbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><circle class="waihcp8bs"/><path class="p9lrksbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:reactjs"} {...others} />);
}

export default Component;
