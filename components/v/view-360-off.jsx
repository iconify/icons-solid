import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tdpj5lbkd.css';
import '../../css/u/uxhqpsxby.css';
import '../../css/p/p0ngbyb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tdpj5lbkd"/><path class="uxhqpsxby"/><path class="p0ngbyb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:view-360-off"} {...others} />);
}

export default Component;
