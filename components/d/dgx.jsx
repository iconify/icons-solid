import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/digorjb9f.css';
import '../../css/q/qfy_7db_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="digorjb9f"/><path class="qfy_7db_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dgx"} {...others} />);
}

export default Component;
