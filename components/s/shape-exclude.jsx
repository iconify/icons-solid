import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqcrtybxv.css';
import '../../css/w/wr6o5qbyd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qqcrtybxv"/><path class="wr6o5qbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:shape-exclude"} {...others} />);
}

export default Component;
