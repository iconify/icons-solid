import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn9do0b7m.css';

const viewBox = {"width":1024,"height":992};
const content = `<path class="vn9do0b7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:managedhosting"} {...others} />);
}

export default Component;
