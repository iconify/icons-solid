import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hm349acle.css';
import '../../css/t/thsdebnab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hm349acle"/><path class="thsdebnab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:water-drop"} {...others} />);
}

export default Component;
