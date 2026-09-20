import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1zulpt7g.css';
import '../../css/d/dw84qizwp.css';
import '../../css/g/g0qrzmb0i.css';
import '../../css/d/djr925o6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n1zulpt7g"/><path class="dw84qizwp"/><path class="g0qrzmb0i"/><path class="djr925o6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:volume-medium"} {...others} />);
}

export default Component;
