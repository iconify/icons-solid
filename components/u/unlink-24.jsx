import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp1q85cys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vp1q85cys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:unlink-24"} {...others} />);
}

export default Component;
