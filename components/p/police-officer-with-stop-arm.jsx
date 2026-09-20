import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go81uhbvn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="go81uhbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:police-officer-with-stop-arm"} {...others} />);
}

export default Component;
