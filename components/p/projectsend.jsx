import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2uqve8ay.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="d2uqve8ay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:projectsend"} {...others} />);
}

export default Component;
