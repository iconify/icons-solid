import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zivvlnbln.css';
import '../../css/w/wj8yjhxnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zivvlnbln"/><path class="wj8yjhxnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cylinder-off"} {...others} />);
}

export default Component;
