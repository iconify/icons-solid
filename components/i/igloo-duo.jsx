import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az4b1ibtm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lzukngbwu.css';
import '../../css/q/qojeivbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="az4b1ibtm secondary"/><g class="dt0cm9dhy primary"><path class="lzukngbwu"/><path class="qojeivbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:igloo-duo"} {...others} />);
}

export default Component;
