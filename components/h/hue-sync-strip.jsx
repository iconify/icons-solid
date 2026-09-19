import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf8ha8baf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cf8ha8baf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:hue-sync-strip"} {...others} />);
}

export default Component;
