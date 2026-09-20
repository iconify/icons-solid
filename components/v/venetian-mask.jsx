import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g150lp0jx.css';
import '../../css/o/o4qv1pbyw.css';
import '../../css/q/q-i_u5_qs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g150lp0jx"/><path class="o4qv1pbyw"/><path class="q-i_u5_qs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:venetian-mask"} {...others} />);
}

export default Component;
