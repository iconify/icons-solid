import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip0-r-tkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ip0-r-tkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:file-alert"} {...others} />);
}

export default Component;
