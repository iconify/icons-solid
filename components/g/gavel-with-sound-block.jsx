import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k68etbpof.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k68etbpof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gavel-with-sound-block"} {...others} />);
}

export default Component;
