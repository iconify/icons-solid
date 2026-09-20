import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp59veb0x.css';
import '../../css/x/xe5lf2fsz.css';
import '../../css/o/ozwjasbqk.css';
import '../../css/x/xsydh-bnl.css';
import '../../css/x/x2dxuebvc.css';
import '../../css/i/i1mh7wbnh.css';
import '../../css/t/tw5plsbcy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rp59veb0x"/><path class="xe5lf2fsz"/><path class="ozwjasbqk"/><path class="xsydh-bnl"/><path class="x2dxuebvc"/><path class="i1mh7wbnh"/><path class="tw5plsbcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:kubernetes-16"} {...others} />);
}

export default Component;
