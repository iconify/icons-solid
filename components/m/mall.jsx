import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fur0vn4_a.css';
import '../../css/z/z7bl1d2sz.css';
import '../../css/z/zioqik1qx.css';
import '../../css/h/hdjk1bcol.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fur0vn4_a"/><path class="z7bl1d2sz"/><path class="zioqik1qx"/><path class="hdjk1bcol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mall"} {...others} />);
}

export default Component;
