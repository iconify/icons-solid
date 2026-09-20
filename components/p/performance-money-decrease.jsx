import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kuu8pebak.css';
import '../../css/s/sckgjabzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kuu8pebak"/><path class="sckgjabzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:performance-money-decrease"} {...others} />);
}

export default Component;
