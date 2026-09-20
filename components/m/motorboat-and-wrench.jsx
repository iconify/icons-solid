import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyklqjb4h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gyklqjb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:motorboat-and-wrench"} {...others} />);
}

export default Component;
