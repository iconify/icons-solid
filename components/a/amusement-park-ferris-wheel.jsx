import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/owjk9o9eq.css';
import '../../css/a/a-hn66c-d.css';
import '../../css/x/xohw_uboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="owjk9o9eq"/><path class="a-hn66c-d"/><path class="xohw_uboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:amusement-park-ferris-wheel"} {...others} />);
}

export default Component;
