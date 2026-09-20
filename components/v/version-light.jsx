import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfcr06b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wfcr06b9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:version-light"} {...others} />);
}

export default Component;
