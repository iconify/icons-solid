import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udnf14b2t.css';
import '../../css/x/xz4g601-d.css';
import '../../css/d/ddxxdn1gm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udnf14b2t wm-k"/><path class="wm-k xz4g601-d"/><path class="ddxxdn1gm wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:egg"} {...others} />);
}

export default Component;
