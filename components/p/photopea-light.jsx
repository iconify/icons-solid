import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5y1f8b5l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d5y1f8b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:photopea-light"} {...others} />);
}

export default Component;
