import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktuhdwbfc.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="ktuhdwbfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:analogleft"} {...others} />);
}

export default Component;
