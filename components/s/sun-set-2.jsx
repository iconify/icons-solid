import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjgyyc_du.css';
import '../../css/q/qku2ab65j.css';
import '../../css/p/pjsp1fb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wjgyyc_du"/><path class="qku2ab65j"/><path class="pjsp1fb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:sun-set-2"} {...others} />);
}

export default Component;
