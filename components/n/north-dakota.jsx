import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3s3fb6sn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g3s3fb6sn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:north-dakota"} {...others} />);
}

export default Component;
