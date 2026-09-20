import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hzjwl8h6s.css';
import '../../css/s/syylq41ot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hzjwl8h6s"/><path class="syylq41ot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-back-up-double"} {...others} />);
}

export default Component;
