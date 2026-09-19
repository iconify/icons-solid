import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amf6q6f-a.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="amf6q6f-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:upleft"} {...others} />);
}

export default Component;
