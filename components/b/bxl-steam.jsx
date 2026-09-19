import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lve74zb5j.css';
import '../../css/r/rkbyxzbvs.css';
import '../../css/h/hxxjcny9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lve74zb5j"/><path class="rkbyxzbvs"/><path class="hxxjcny9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-steam"} {...others} />);
}

export default Component;
