import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-i_qcb0v.css';
import '../../css/h/ha04bdb-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e-i_qcb0v"/><path clip-rule="evenodd" class="ha04bdb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kasta"} {...others} />);
}

export default Component;
