import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/va64q7e3s.css';
import '../../css/y/ytgw6jbja.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="va64q7e3s"/><path class="ytgw6jbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homelable-light"} {...others} />);
}

export default Component;
