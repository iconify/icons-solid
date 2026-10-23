import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kd2ouzbpq.css';
import '../../css/b/bitosrbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kd2ouzbpq"/><path class="bitosrbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:certificate"} {...others} />);
}

export default Component;
