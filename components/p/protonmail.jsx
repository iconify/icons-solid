import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmn5w0e9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jmn5w0e9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:protonmail"} {...others} />);
}

export default Component;
