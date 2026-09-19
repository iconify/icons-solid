import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oagawgbbv.css';
import '../../css/o/olpgfdb0y.css';
import '../../css/o/olyxe4bhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oagawgbbv"/><path class="olpgfdb0y"/><path class="olyxe4bhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:complaint"} {...others} />);
}

export default Component;
