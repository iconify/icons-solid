import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nq7gakb6c.css';
import '../../css/b/bvsehuhap.css';
import '../../css/d/dfv0w4p5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="nq7gakb6c"/><path class="bvsehuhap"/><path class="dfv0w4p5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:transform-right"} {...others} />);
}

export default Component;
