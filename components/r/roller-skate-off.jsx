import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifu-l4bdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifu-l4bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:roller-skate-off"} {...others} />);
}

export default Component;
