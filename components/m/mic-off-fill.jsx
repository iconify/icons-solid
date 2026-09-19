import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6z7a8-0d.css';
import '../../css/k/kebsqacsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6z7a8-0d"/><path class="kebsqacsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:mic-off-fill"} {...others} />);
}

export default Component;
