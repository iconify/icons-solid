import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw5hcaclv.css';

const viewBox = {"width":464,"height":472};
const content = `<path class="qw5hcaclv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:openid"} {...others} />);
}

export default Component;
