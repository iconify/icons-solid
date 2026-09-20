import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csocnccks.css';
import '../../css/l/llqf1f1jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="csocnccks"/><path clip-rule="evenodd" class="llqf1f1jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifer-bold"} {...others} />);
}

export default Component;
