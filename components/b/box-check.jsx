import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/size2fbdv.css';
import '../../css/u/uk7hokb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="size2fbdv"/><path class="uk7hokb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-check"} {...others} />);
}

export default Component;
