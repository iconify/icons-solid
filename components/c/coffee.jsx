import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dehwqjzue.css';
import '../../css/n/n-lsx4-9n.css';
import '../../css/j/jnla0ybqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dehwqjzue"/><path class="n-lsx4-9n"/><path class="jnla0ybqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:coffee"} {...others} />);
}

export default Component;
