import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tylzg-oiv.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="tylzg-oiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:railroad"} {...others} />);
}

export default Component;
