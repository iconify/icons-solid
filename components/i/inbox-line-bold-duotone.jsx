import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/a/ajralqjgp.css';
import '../../css/n/n2x9ccb-p.css';
import '../../css/x/xd2516b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="ajralqjgp"/><path class="n2x9ccb-p"/><path class="xd2516b2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-line-bold-duotone"} {...others} />);
}

export default Component;
