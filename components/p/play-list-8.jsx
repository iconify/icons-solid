import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mujrfnrcf.css';
import '../../css/s/sdgnimb7u.css';
import '../../css/l/l_roz9bdx.css';
import '../../css/g/gqcvedvsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mujrfnrcf"/><path class="sdgnimb7u"/><path class="l_roz9bdx"/><path class="gqcvedvsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:play-list-8"} {...others} />);
}

export default Component;
