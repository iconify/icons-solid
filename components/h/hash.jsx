import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx4l9z1qt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xx4l9z1qt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:hash"} {...others} />);
}

export default Component;
