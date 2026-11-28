import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2j9rij4x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ur93yjbpu.css';
import '../../css/w/wwbc-hbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c2j9rij4x secondary"/><g class="dt0cm9dhy primary"><path class="ur93yjbpu"/><path class="wwbc-hbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pyramid-duo"} {...others} />);
}

export default Component;
