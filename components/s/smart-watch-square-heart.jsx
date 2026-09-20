import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1ugwwbcq.css';
import '../../css/x/xm50k361x.css';
import '../../css/i/i78jv3bhm.css';
import '../../css/l/l_pb9i6ko.css';
import '../../css/p/p334evb8q.css';
import '../../css/m/mbl3emien.css';
import '../../css/v/vu7ztpf0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t1ugwwbcq"/><path class="xm50k361x"/><path class="i78jv3bhm"/><path class="l_pb9i6ko"/><path class="p334evb8q"/><path class="mbl3emien"/><path class="vu7ztpf0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smart-watch-square-heart"} {...others} />);
}

export default Component;
