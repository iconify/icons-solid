import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm79r6b6e.css';
import '../../css/t/tfqufibtu.css';
import '../../css/o/o2gropigj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xm79r6b6e"/><path class="tfqufibtu"/><path class="o2gropigj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:mailbox-post-1"} {...others} />);
}

export default Component;
