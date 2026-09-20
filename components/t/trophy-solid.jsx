import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xngkwz6zf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xngkwz6zf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:trophy-solid"} {...others} />);
}

export default Component;
