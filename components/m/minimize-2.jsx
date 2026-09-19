import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv5n3jbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv5n3jbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:minimize-2"} {...others} />);
}

export default Component;
