import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpkqqsb3n.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="qpkqqsb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:picture"} {...others} />);
}

export default Component;
