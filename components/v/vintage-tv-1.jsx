import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqfh6jc-b.css';
import '../../css/q/q7imqmbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oqfh6jc-b"/><path class="q7imqmbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:vintage-tv-1"} {...others} />);
}

export default Component;
