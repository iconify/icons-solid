import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd9r5cegh.css';
import '../../css/j/js6n1vb7u.css';
import '../../css/g/g0be4x18a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pd9r5cegh"/><path class="js6n1vb7u"/><path class="g0be4x18a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:group-global"} {...others} />);
}

export default Component;
