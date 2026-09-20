import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/btr6_dbev.css';
import '../../css/v/vr75-ilue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="btr6_dbev"/><path class="vr75-ilue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-steam"} {...others} />);
}

export default Component;
