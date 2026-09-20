import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elrh2557x.css';
import '../../css/x/xetimxb4d.css';
import '../../css/m/m-xwi9bgo.css';
import '../../css/k/khw2j8bkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="elrh2557x"/><path class="xetimxb4d"/><path class="m-xwi9bgo"/><path class="khw2j8bkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:office-water-dispenser"} {...others} />);
}

export default Component;
