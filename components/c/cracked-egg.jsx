import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ugn01cc5p.css';
import '../../css/t/trlj83v6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ugn01cc5p"/><path class="trlj83v6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cracked-egg"} {...others} />);
}

export default Component;
