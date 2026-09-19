import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/iv6gf1g5l.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/v/vc8ie36qx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="iv6gf1g5l"/><path class="tcrnivb-g"/><path class="vc8ie36qx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-download-01"} {...others} />);
}

export default Component;
