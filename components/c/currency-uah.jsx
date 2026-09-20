import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngd1m3bou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngd1m3bou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:currency-uah"} {...others} />);
}

export default Component;
