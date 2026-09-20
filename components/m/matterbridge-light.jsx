import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp9-fhbrs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tp9-fhbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:matterbridge-light"} {...others} />);
}

export default Component;
