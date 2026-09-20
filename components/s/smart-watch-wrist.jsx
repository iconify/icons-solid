import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ae85lnhzi.css';
import '../../css/w/wzpm1injt.css';
import '../../css/b/bzgxe9e7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ae85lnhzi"/><path class="wzpm1injt"/><path class="bzgxe9e7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smart-watch-wrist"} {...others} />);
}

export default Component;
