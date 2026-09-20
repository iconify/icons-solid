import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on5wcqudm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="on5wcqudm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wikipedia-dark"} {...others} />);
}

export default Component;
