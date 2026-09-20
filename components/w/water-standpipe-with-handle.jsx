import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr54odb-n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gr54odb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:water-standpipe-with-handle"} {...others} />);
}

export default Component;
