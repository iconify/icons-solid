import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yar78jqoe.css';
import '../../css/x/xis3mnypi.css';
import '../../css/r/r0qvtmk7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yar78jqoe"/><path class="xis3mnypi"/><path class="r0qvtmk7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:mouse-wireless-1"} {...others} />);
}

export default Component;
