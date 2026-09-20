import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhntz2bgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mhntz2bgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:credit-card-sync"} {...others} />);
}

export default Component;
