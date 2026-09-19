import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5t8n1bbv.css';

const viewBox = {"width":1025,"height":1025};
const content = `<path class="x5t8n1bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:backupwizard"} {...others} />);
}

export default Component;
