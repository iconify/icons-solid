import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wn2pl4bna.css';
import '../../css/z/zbrtlabdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wn2pl4bna"/><path class="zbrtlabdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quote-line-duotone"} {...others} />);
}

export default Component;
