import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aw2wtqber.css';
import '../../css/v/v7e71vdzm.css';
import '../../css/f/fx_6-bche.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aw2wtqber"/><path class="v7e71vdzm"/><path class="fx_6-bche"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cpu-settings"} {...others} />);
}

export default Component;
