import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ycedndbee.css';
import '../../css/a/ahnb0mb5v.css';
import '../../css/o/om9vhvbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ycedndbee"/><path class="ahnb0mb5v"/><path class="om9vhvbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:amusement-park-castle"} {...others} />);
}

export default Component;
