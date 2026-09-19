import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s23bnwb9n.css';

const viewBox = {"width":343,"height":512};
const content = `<path class="s23bnwb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:cloudfoundry"} {...others} />);
}

export default Component;
