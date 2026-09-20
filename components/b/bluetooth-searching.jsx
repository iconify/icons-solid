import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnkxsrsgq.css';
import '../../css/c/cn0spvbsb.css';
import '../../css/u/udlqy91nc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wnkxsrsgq"/><path class="cn0spvbsb"/><path class="udlqy91nc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bluetooth-searching"} {...others} />);
}

export default Component;
