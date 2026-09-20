import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3caf4h6m.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="w3caf4h6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pencil-remix"} {...others} />);
}

export default Component;
