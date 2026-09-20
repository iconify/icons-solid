import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb9u09bsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lb9u09bsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:card-account-phone-outline"} {...others} />);
}

export default Component;
