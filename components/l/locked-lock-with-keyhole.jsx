import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unm720e2p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="unm720e2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:locked-lock-with-keyhole"} {...others} />);
}

export default Component;
