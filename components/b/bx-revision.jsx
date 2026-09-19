import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxl-ln2yk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxl-ln2yk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-revision"} {...others} />);
}

export default Component;
