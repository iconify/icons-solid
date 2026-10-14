import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/jp8ni5u5f.css';
import '../../css/c/cd4vgnb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="jp8ni5u5f"/><path class="cd4vgnb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:chevrons-up"} {...others} />);
}

export default Component;
