import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyi-f8nlk.css';

const viewBox = {"width":579.274,"height":1000};
const content = `<path class="xyi-f8nlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:odnoklassniki"} {...others} />);
}

export default Component;
