import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/h_u9dvzyh.css';
import '../../css/v/v9xq7ibdh.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="h_u9dvzyh"/><path class="v9xq7ibdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:avocado-2"} {...others} />);
}

export default Component;
