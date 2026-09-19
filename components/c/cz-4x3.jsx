import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/damb695lr.css';
import '../../css/k/kavt8psvh.css';
import '../../css/x/xztbdibpp.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="damb695lr"/><path class="kavt8psvh"/><path class="xztbdibpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cz-4x3"} {...others} />);
}

export default Component;
