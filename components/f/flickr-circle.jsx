import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kz9epiigo.css';
import '../../css/m/mswo_dbyo.css';
import '../../css/b/b1_g2rb3z.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};
const content = `<g class="cuyn6tgcc"><circle class="kz9epiigo"/><circle class="mswo_dbyo"/><path class="b1_g2rb3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:flickr-circle"} {...others} />);
}

export default Component;
