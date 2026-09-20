import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxgrxpsyl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cxgrxpsyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:wifi-no-signal-with-x"} {...others} />);
}

export default Component;
