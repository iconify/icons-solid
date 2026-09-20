import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox-nzf.css';
import '../../css/u/u6fdno.css';
import '../../css/y/ydovum.css';
import '../../css/l/lx2oxu.css';
import '../../css/g/gq-uqf.css';
import '../../css/d/djbuks.css';
import '../../css/t/th60ya.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ox-nzf"/><circle class="u6fdno ydovum"/><circle class="lx2oxu ydovum"/><circle class="gq-uqf ydovum"/><circle class="djbuks ydovum"/><circle class="th60ya ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cookie"} {...others} />);
}

export default Component;
