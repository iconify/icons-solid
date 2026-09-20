import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j80x_6w1a.css';
import '../../css/r/r3uw8bcwl.css';
import '../../css/i/ixd243bqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="j80x_6w1a"/><path class="r3uw8bcwl"/><path class="ixd243bqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:responsive-design-expand"} {...others} />);
}

export default Component;
