import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j07dkobur.css';
import '../../css/s/ssl_p8bbq.css';
import '../../css/v/vzr5kgc6d.css';
import '../../css/l/lcu8a2auw.css';
import '../../css/e/e4lgkbr8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="j07dkobur"/><path class="ssl_p8bbq"/><path class="vzr5kgc6d"/><path class="lcu8a2auw"/><path class="e4lgkbr8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:website-development-browser-source-code"} {...others} />);
}

export default Component;
