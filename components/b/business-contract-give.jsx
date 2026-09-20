import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yry6f8qkg.css';
import '../../css/m/mb_vxkgos.css';
import '../../css/t/tu4cz248c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yry6f8qkg"/><path class="mb_vxkgos"/><path class="tu4cz248c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:business-contract-give"} {...others} />);
}

export default Component;
