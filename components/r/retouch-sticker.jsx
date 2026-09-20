import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dya8ib-fm.css';
import '../../css/g/gu0vjlbyc.css';
import '../../css/f/fja6vyb6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dya8ib-fm"/><path class="gu0vjlbyc"/><path class="fja6vyb6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:retouch-sticker"} {...others} />);
}

export default Component;
