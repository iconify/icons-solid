import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/hqe6sjf6w.css';
import '../../css/c/coo1-i7_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="hqe6sjf6w"/><path class="coo1-i7_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:dashboard-circle"} {...others} />);
}

export default Component;
