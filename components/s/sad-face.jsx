import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/y/yjsjycc6p.css';
import '../../css/o/or1owsbda.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="yjsjycc6p"/><path class="or1owsbda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:sad-face"} {...others} />);
}

export default Component;
