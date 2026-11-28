import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvprmjb2q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kd2ormbzf.css';
import '../../css/c/cggwmabhq.css';
import '../../css/u/u8bu0m_-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvprmjb2q secondary"/><g class="dt0cm9dhy primary"><path class="kd2ormbzf"/><path class="cggwmabhq"/><path class="u8bu0m_-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:train-track-duo"} {...others} />);
}

export default Component;
