import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exz7v5bzz.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="exz7v5bzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:list-percentage"} {...others} />);
}

export default Component;
