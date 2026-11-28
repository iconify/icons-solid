import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm28qqb4l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n_m1ugbqz.css';
import '../../css/a/ay-uj6bxa.css';
import '../../css/y/y-vn53bau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sm28qqb4l"/><g class="dt0cm9dhy primary"><path class="n_m1ugbqz"/><path class="ay-uj6bxa"/><path class="y-vn53bau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-dashed-check-duo"} {...others} />);
}

export default Component;
