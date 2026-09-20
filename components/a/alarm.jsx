import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2y3484uo.css';
import '../../css/l/l9ga4rbig.css';
import '../../css/d/d36wgbpww.css';
import '../../css/n/nl6frqbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o2y3484uo"/><path class="l9ga4rbig"/><path class="d36wgbpww"/><path class="nl6frqbyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:alarm"} {...others} />);
}

export default Component;
