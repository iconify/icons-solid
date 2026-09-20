import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oaeymebhg.css';
import '../../css/x/xqnq_ab_u.css';
import '../../css/u/uevo4sbur.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oaeymebhg"/><path clip-rule="evenodd" class="xqnq_ab_u"/><path class="uevo4sbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-remove-flat"} {...others} />);
}

export default Component;
