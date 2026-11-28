import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzuj9cihv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cqhzkvbzd.css';
import '../../css/f/fl85embli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzuj9cihv secondary"/><g class="dt0cm9dhy primary"><path class="cqhzkvbzd"/><path class="fl85embli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:leaf-duo"} {...others} />);
}

export default Component;
