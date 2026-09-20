import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkh-x7lkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkh-x7lkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-round-fill"} {...others} />);
}

export default Component;
