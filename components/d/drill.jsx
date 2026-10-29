import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nm5v3hbmq.css';
import '../../css/j/jdmci-vhw.css';
import '../../css/o/ozwv80bmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nm5v3hbmq"/><path class="jdmci-vhw"/><path class="ozwv80bmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:drill"} {...others} />);
}

export default Component;
