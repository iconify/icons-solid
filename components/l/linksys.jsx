import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-6rz8hpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-6rz8hpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:linksys"} {...others} />);
}

export default Component;
