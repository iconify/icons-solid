import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oaqd1-b4h.css';

const viewBox = {"width":1088,"height":1792};
const content = `<path class="oaqd1-b4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:odnoklassniki"} {...others} />);
}

export default Component;
