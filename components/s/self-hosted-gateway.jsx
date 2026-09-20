import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdgy03bmi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bdgy03bmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:self-hosted-gateway"} {...others} />);
}

export default Component;
