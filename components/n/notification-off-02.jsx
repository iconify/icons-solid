import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fh90--bfo.css';
import '../../css/y/yjpa273dk.css';
import '../../css/w/w1c2cz4cz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="fh90--bfo"/><path class="yjpa273dk"/><path class="w1c2cz4cz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-off-02"} {...others} />);
}

export default Component;
