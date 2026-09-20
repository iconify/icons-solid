import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa8z4qbys.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1};
const content = `<path class="qa8z4qbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:gps"} {...others} />);
}

export default Component;
