import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyhrc7b4c.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gyhrc7b4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:speedalt"} {...others} />);
}

export default Component;
