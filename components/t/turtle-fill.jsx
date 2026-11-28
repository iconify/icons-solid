import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zho1v3d8q.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="zho1v3d8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:turtle-fill"} {...others} />);
}

export default Component;
