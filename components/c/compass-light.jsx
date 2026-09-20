import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/q/qy-3zgbds.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lk08wyuco.css';
import '../../css/x/xglklabzt.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGvXiKzcvd" class="n1mjunbsu"><path class="qy-3zgbds"/></mask><g class="h01tyzbfu"><path mask="url(#SVGvXiKzcvd)" class="lk08wyuco"/><circle class="xglklabzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compass-light"} {...others} />);
}

export default Component;
