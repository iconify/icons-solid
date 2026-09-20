import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8hypz94q.css';
import '../../css/e/egr9lubhk.css';
import '../../css/s/sp_2fg58m.css';
import '../../css/p/paxuqrb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z8hypz94q"/><path class="egr9lubhk"/><path class="sp_2fg58m"/><path class="paxuqrb9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:button-fast-forward-1"} {...others} />);
}

export default Component;
