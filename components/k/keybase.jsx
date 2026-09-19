import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_r27j01j.css';

const viewBox = {"width":472,"height":512};
const content = `<path clip-rule="evenodd" class="t_r27j01j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:keybase"} {...others} />);
}

export default Component;
