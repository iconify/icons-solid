import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j-adgme1p.css';
import '../../css/d/dawbntbka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j-adgme1p"/><path class="dawbntbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:tower-no-access"} {...others} />);
}

export default Component;
