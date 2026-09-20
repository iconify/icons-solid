import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdd1lsb_h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qdd1lsb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:kerb-raised"} {...others} />);
}

export default Component;
