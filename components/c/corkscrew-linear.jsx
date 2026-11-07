import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aym2gmi6q.css';
import '../../css/y/yr7d5vtia.css';
import '../../css/o/o-y-5acxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aym2gmi6q"/><path class="yr7d5vtia"/><path class="o-y-5acxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:corkscrew-linear"} {...others} />);
}

export default Component;
