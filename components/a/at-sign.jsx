import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2dx1rbn.css';
import '../../css/h/hnusc6b0j.css';
import '../../css/o/orukzkbrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="at2dx1rbn"><path class="hnusc6b0j"/><path class="orukzkbrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:at-sign"} {...others} />);
}

export default Component;
