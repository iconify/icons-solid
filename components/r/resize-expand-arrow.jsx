import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yq7wqq0em.css';
import '../../css/c/c36ls8boi.css';
import '../../css/r/rsp9libtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yq7wqq0em"/><path class="c36ls8boi"/><path class="rsp9libtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:resize-expand-arrow"} {...others} />);
}

export default Component;
