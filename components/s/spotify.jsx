import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sdw01baps.css';
import '../../css/g/g9bey28zn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sdw01baps"/><path class="g9bey28zn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:spotify"} {...others} />);
}

export default Component;
