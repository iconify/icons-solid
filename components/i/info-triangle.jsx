import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y7g02bcco.css';
import '../../css/p/pksaamvhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y7g02bcco"/><path class="pksaamvhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:info-triangle"} {...others} />);
}

export default Component;
