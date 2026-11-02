import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl8c9tblm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cl8c9tblm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:badge-alert-fill"} {...others} />);
}

export default Component;
