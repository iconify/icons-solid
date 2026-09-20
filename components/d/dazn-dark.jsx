import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm9ghmktn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nm9ghmktn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dazn-dark"} {...others} />);
}

export default Component;
