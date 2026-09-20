import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd_ya3bpo.css';
import '../../css/t/tb0hdetnn.css';
import '../../css/b/b21nc0b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zd_ya3bpo"/><path class="tb0hdetnn"/><path class="b21nc0b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:hierarchy-business-2"} {...others} />);
}

export default Component;
