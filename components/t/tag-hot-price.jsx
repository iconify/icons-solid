import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ti0xd567a.css';
import '../../css/o/o88jarcsv.css';
import '../../css/d/damw3ub_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ti0xd567a"/><path class="o88jarcsv"/><path class="damw3ub_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:tag-hot-price"} {...others} />);
}

export default Component;
