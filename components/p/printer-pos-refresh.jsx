import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slxj0bb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="slxj0bb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:printer-pos-refresh"} {...others} />);
}

export default Component;
