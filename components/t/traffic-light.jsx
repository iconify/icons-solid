import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no7-zx8fb.css';
import '../../css/a/aytc8nbwo.css';
import '../../css/o/omo4jjbjo.css';
import '../../css/v/vujhad2mq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="no7-zx8fb"/><path class="aytc8nbwo"/><path class="omo4jjbjo"/><path class="vujhad2mq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:traffic-light"} {...others} />);
}

export default Component;
