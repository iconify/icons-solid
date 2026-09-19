import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ucmf90w8w.css';
import '../../css/r/rpipyf98w.css';
import '../../css/d/dks-6wcfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ucmf90w8w"/><path class="rpipyf98w"/><path class="dks-6wcfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plant-03"} {...others} />);
}

export default Component;
