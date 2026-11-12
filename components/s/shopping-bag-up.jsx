import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d0eax-uwq.css';
import '../../css/g/g7zdiy_dh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d0eax-uwq"/><path class="g7zdiy_dh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-up"} {...others} />);
}

export default Component;
