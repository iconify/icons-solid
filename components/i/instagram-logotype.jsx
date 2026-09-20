import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvr6yacwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvr6yacwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:instagram-logotype"} {...others} />);
}

export default Component;
