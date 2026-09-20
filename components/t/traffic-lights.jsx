import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pg4-jub4i.css';
import '../../css/x/xq8t-jxvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pg4-jub4i"/><path class="xq8t-jxvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:traffic-lights"} {...others} />);
}

export default Component;
