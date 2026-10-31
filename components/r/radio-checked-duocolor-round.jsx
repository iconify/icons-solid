import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lxix245uv.css';
import '../../css/t/t1x7x9bkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lxix245uv"/><path class="t1x7x9bkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:radio-checked-duocolor-round"} {...others} />);
}

export default Component;
