import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue9d2bbun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ue9d2bbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:leaf-3-fill"} {...others} />);
}

export default Component;
