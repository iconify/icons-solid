import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d__mcubxf.css';
import '../../css/y/ytqqa2b3n.css';
import '../../css/z/zakpjbh7g.css';
import '../../css/p/pi2b62bry.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d__mcubxf"/><path class="ytqqa2b3n"/><path class="zakpjbh7g"/><path class="pi2b62bry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:web"} {...others} />);
}

export default Component;
