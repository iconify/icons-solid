import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qseawcbxu.css';
import '../../css/v/v_f8rsa0h.css';
import '../../css/v/vwzrdlbul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qseawcbxu"/><circle class="v_f8rsa0h"/><path class="vwzrdlbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:photo-album"} {...others} />);
}

export default Component;
