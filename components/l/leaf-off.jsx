import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yghw3sbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yghw3sbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:leaf-off"} {...others} />);
}

export default Component;
