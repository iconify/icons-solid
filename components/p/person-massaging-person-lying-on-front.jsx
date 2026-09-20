import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnac4ibum.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vnac4ibum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-massaging-person-lying-on-front"} {...others} />);
}

export default Component;
