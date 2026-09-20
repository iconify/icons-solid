import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkwg2476l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkwg2476l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cloud-sun-rain"} {...others} />);
}

export default Component;
