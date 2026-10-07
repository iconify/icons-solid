import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sym69zbds.css';
import '../../css/c/cnf_zew0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sym69zbds"/><path class="cnf_zew0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:maps-turn-back"} {...others} />);
}

export default Component;
