import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca_bn4ekm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ca_bn4ekm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-input-solid"} {...others} />);
}

export default Component;
