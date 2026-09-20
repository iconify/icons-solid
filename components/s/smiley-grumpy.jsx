import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmx9skinh.css';
import '../../css/x/xc4hi7hnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmx9skinh"/><path class="xc4hi7hnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-grumpy"} {...others} />);
}

export default Component;
