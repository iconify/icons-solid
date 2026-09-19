import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0c_zi20n.css';

const viewBox = {"width":559,"height":854};
const content = `<path class="c0c_zi20n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:backslash"} {...others} />);
}

export default Component;
