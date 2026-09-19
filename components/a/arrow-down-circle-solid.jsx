import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk58z1bbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nk58z1bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:arrow-down-circle-solid"} {...others} />);
}

export default Component;
