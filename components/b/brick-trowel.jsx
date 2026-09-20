import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxmyoogdn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qxmyoogdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:brick-trowel"} {...others} />);
}

export default Component;
