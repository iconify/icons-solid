import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow6zw0bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ow6zw0bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:italic-slash-solid"} {...others} />);
}

export default Component;
