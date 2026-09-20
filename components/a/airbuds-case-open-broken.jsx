import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s9d3aj35l.css';
import '../../css/b/bjlsdyb-q.css';
import '../../css/z/z33qz2b_s.css';
import '../../css/j/jgur5aczj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s9d3aj35l"/><path class="bjlsdyb-q"/><path class="z33qz2b_s"/><path class="jgur5aczj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-open-broken"} {...others} />);
}

export default Component;
