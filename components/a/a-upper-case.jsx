import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3az_8srk.css';

const viewBox = {"width":547,"height":762};
const content = `<path class="x3az_8srk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:a-upper-case"} {...others} />);
}

export default Component;
