import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9v41_qpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n9v41_qpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:direction-alt-3-fill"} {...others} />);
}

export default Component;
