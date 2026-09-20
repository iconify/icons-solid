import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o40ncj9os.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o40ncj9os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:osi"} {...others} />);
}

export default Component;
