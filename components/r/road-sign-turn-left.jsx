import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vvpu9bq9c.css';
import '../../css/t/tv-pjdbgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vvpu9bq9c"/><path class="tv-pjdbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:road-sign-turn-left"} {...others} />);
}

export default Component;
