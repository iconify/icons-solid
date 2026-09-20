import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jy2jpyx9d.css';
import '../../css/g/ghmvgjdfp.css';
import '../../css/i/i2bkkzmma.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jy2jpyx9d"/><path class="ghmvgjdfp"/><path class="i2bkkzmma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:app-window-bookmark"} {...others} />);
}

export default Component;
