import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tb_h7bczg.css';
import '../../css/d/dmhxdlbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tb_h7bczg"/><path class="dmhxdlbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-spark"} {...others} />);
}

export default Component;
