import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/od9t7skbr.css';
import '../../css/g/gvyal6ejr.css';
import '../../css/g/gnu1hqb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="od9t7skbr"/><path class="gvyal6ejr"/><path class="gnu1hqb7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:website-development-browser-hand"} {...others} />);
}

export default Component;
