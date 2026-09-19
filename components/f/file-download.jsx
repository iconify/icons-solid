import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k_f8-np6u.css';
import '../../css/a/ackgx5bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k_f8-np6u"/><path class="ackgx5bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-download"} {...others} />);
}

export default Component;
