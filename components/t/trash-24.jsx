import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq3da4h7l.css';
import '../../css/s/slygv4qud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sq3da4h7l"/><path class="slygv4qud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:trash-24"} {...others} />);
}

export default Component;
