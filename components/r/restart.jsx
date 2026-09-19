import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gljv7l19y.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gljv7l19y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:restart"} {...others} />);
}

export default Component;
