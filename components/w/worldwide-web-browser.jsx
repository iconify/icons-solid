import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v1hug_bsz.css';
import '../../css/s/s6i8zk-5y.css';
import '../../css/l/l5_dd4bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="v1hug_bsz"/><path class="s6i8zk-5y"/><path class="l5_dd4bsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:worldwide-web-browser"} {...others} />);
}

export default Component;
