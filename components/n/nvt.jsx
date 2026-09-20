import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm6gpacbl.css';
import '../../css/r/r1x8h9t3p.css';
import '../../css/z/zg089ff_d.css';
import '../../css/r/r70b2ojmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xm6gpacbl"/><path class="r1x8h9t3p"/><path clip-rule="evenodd" class="zg089ff_d"/><path class="r70b2ojmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nvt"} {...others} />);
}

export default Component;
