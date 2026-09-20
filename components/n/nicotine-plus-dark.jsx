import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-dxomgwz.css';
import '../../css/s/sj_lllbpr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b-dxomgwz"/><path class="sj_lllbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nicotine-plus-dark"} {...others} />);
}

export default Component;
