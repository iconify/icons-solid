import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n0y6j6byu.css';
import '../../css/f/fiyr8cb9q.css';
import '../../css/y/yimcpzbjq.css';
import '../../css/k/k2a0vobbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n0y6j6byu"/><path class="fiyr8cb9q"/><path class="yimcpzbjq"/><path class="k2a0vobbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:help-headphones-customer-support-human"} {...others} />);
}

export default Component;
