import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z4r1qykhw.css';
import '../../css/r/rn6sezfiu.css';
import '../../css/i/i6rghp2ll.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="z4r1qykhw"/><path class="rn6sezfiu"/><path class="i6rghp2ll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:money-bill-fly"} {...others} />);
}

export default Component;
