import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/c/cnqq36xqp.css';
import '../../css/z/zunq1wbfw.css';

const viewBox = {"width":120,"height":120};
const content = `<g class="n1mjunbsu"><path clip-rule="evenodd" class="cnqq36xqp"/><path class="zunq1wbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:refine-dark"} {...others} />);
}

export default Component;
