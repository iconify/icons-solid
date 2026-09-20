import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw_-6tbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gw_-6tbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:facebook-circle"} {...others} />);
}

export default Component;
