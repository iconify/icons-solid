import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/df2l3brnp.css';
import '../../css/o/om-d6xjfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="df2l3brnp"/><rect class="om-d6xjfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:monitor-smartphone"} {...others} />);
}

export default Component;
