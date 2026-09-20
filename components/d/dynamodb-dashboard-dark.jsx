import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hccjpqwdn.css';
import '../../css/s/sgpjj4b1a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hccjpqwdn"/><path class="sgpjj4b1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dynamodb-dashboard-dark"} {...others} />);
}

export default Component;
