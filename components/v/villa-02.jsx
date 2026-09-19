import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pq6o2nbsn.css';
import '../../css/i/ix-aogo6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pq6o2nbsn"/><path class="ix-aogo6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:villa-02"} {...others} />);
}

export default Component;
