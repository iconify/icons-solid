import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mu_eozumq.css';
import '../../css/r/r9fh9fbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mu_eozumq"/><path class="r9fh9fbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-play"} {...others} />);
}

export default Component;
