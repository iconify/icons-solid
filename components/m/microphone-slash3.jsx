import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c839fkb0p.css';
import '../../css/s/s8vnbc09s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c839fkb0p"/><path class="s8vnbc09s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:microphone-slash3"} {...others} />);
}

export default Component;
