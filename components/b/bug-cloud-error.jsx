import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y3-abdj5w.css';
import '../../css/f/f9u-xt92m.css';
import '../../css/b/b8o1_sb7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="y3-abdj5w"/><path class="f9u-xt92m"/><path class="b8o1_sb7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:bug-cloud-error"} {...others} />);
}

export default Component;
