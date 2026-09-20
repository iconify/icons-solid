import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db2z1jbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="db2z1jbtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-paragraph"} {...others} />);
}

export default Component;
