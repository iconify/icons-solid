import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd4yx7c9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rd4yx7c9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:border-horizontal"} {...others} />);
}

export default Component;
