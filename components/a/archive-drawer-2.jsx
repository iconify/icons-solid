import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yle6jzvgh.css';
import '../../css/x/xug9tx33p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yle6jzvgh"/><path class="xug9tx33p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:archive-drawer-2"} {...others} />);
}

export default Component;
