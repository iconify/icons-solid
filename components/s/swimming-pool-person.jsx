import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n9l5e8mcr.css';
import '../../css/a/a-ewrneoj.css';
import '../../css/r/r6v1ktpdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n9l5e8mcr"/><path class="a-ewrneoj"/><path class="r6v1ktpdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:swimming-pool-person"} {...others} />);
}

export default Component;
