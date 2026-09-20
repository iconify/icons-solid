import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1pyxgm9j.css';
import '../../css/u/uq0_eabch.css';
import '../../css/y/yz4p29iab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g1pyxgm9j"/><path class="uq0_eabch"/><path class="yz4p29iab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:smart-speaker2-duotone"} {...others} />);
}

export default Component;
