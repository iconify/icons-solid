import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c06-m_bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c06-m_bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cube-3d-fill"} {...others} />);
}

export default Component;
