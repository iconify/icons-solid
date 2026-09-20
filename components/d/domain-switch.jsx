import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6-5yob4z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6-5yob4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:domain-switch"} {...others} />);
}

export default Component;
