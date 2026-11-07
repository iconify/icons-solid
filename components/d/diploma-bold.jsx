import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8yegacmv.css';
import '../../css/m/mrtelsu8o.css';
import '../../css/d/d05iscbzr.css';
import '../../css/f/fype3xbzj.css';
import '../../css/c/c742_q1jj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v8yegacmv"/><path class="mrtelsu8o"/><path class="d05iscbzr"/><path class="fype3xbzj"/><path class="c742_q1jj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-bold"} {...others} />);
}

export default Component;
