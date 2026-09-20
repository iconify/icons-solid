import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uw3xdbbto.css';
import '../../css/g/gov1h1b6y.css';
import '../../css/x/xk5hq-b0q.css';
import '../../css/z/zo7p9o28s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uw3xdbbto"/><path class="gov1h1b6y"/><path class="xk5hq-b0q"/><path class="zo7p9o28s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:document-bookmark-2"} {...others} />);
}

export default Component;
