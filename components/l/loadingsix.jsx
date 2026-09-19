import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx6fch0-u.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vx6fch0-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:loadingsix"} {...others} />);
}

export default Component;
