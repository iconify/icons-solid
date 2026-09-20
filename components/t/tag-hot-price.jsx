import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sd5_95y7u.css';
import '../../css/w/wqbd_ktkq.css';
import '../../css/s/svb95kb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sd5_95y7u"/><path class="wqbd_ktkq"/><path class="svb95kb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:tag-hot-price"} {...others} />);
}

export default Component;
