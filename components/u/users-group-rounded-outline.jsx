import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnhj8acgw.css';
import '../../css/z/zea0r4yqa.css';
import '../../css/r/rx8h3bbfe.css';
import '../../css/z/zp1wzr3to.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hnhj8acgw"/><path class="zea0r4yqa"/><path clip-rule="evenodd" class="rx8h3bbfe"/><path class="zp1wzr3to"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-rounded-outline"} {...others} />);
}

export default Component;
