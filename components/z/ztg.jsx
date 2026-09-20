import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfy5v1ddq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kfy5v1ddq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ztg"} {...others} />);
}

export default Component;
