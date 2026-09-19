import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw038zbvw.css';
import '../../css/n/nr8b-db0z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tw038zbvw"/><path class="nr8b-db0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-continuous-delivery"} {...others} />);
}

export default Component;
