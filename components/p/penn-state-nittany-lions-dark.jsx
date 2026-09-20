import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bim1nbclp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bim1nbclp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:penn-state-nittany-lions-dark"} {...others} />);
}

export default Component;
