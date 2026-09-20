import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wn0mrybgi.css';
import '../../css/f/fq5-7dbbn.css';
import '../../css/r/rj-q30x7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wn0mrybgi"/><path class="fq5-7dbbn"/><path class="rj-q30x7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:currency-dollar-decrease"} {...others} />);
}

export default Component;
