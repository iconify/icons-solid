import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4ztfc8fc.css';

const viewBox = {"width":411,"height":512};
const content = `<path class="d4ztfc8fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:lolcode"} {...others} />);
}

export default Component;
