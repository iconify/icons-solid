import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b0h64mbui.css';
import '../../css/n/n8t24oq7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b0h64mbui"/><path class="n8t24oq7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:element-plus"} {...others} />);
}

export default Component;
