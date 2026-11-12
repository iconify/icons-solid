import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it-qx-x1g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="it-qx-x1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:db-ui-light"} {...others} />);
}

export default Component;
