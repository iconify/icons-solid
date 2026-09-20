import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs02qrb6l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qs02qrb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mountain-with-greek-cross"} {...others} />);
}

export default Component;
