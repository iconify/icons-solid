import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c0jamrbeb.css';
import '../../css/q/quhexczws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c0jamrbeb"/><path class="quhexczws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:charger-1"} {...others} />);
}

export default Component;
