import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v74tltshr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fpvc0x2ta.css';
import '../../css/a/a-qyfacks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary v74tltshr"/><g class="dt0cm9dhy primary"><path class="fpvc0x2ta"/><path class="a-qyfacks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:play-pause-duo"} {...others} />);
}

export default Component;
