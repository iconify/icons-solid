import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un8-nx_wi.css';

const viewBox = {"width":1536,"height":1408};
const content = `<path class="un8-nx_wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:hand-rock-o"} {...others} />);
}

export default Component;
