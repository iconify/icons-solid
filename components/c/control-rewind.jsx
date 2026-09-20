import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5lvhug6f.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="w5lvhug6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:control-rewind"} {...others} />);
}

export default Component;
