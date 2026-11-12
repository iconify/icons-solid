import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe2kmybrw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xe2kmybrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pg-back-web-dark"} {...others} />);
}

export default Component;
