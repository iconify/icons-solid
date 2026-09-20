import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imkf5vvcy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="imkf5vvcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:teddycloud-light"} {...others} />);
}

export default Component;
