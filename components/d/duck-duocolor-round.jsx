import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h3lxvsd0i.css';
import '../../css/y/yxwzk_xqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h3lxvsd0i"/><path class="yxwzk_xqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:duck-duocolor-round"} {...others} />);
}

export default Component;
