import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjkvbyb0f.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z8df8vb7j.css';
import '../../css/y/yidzp7bkz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bjkvbyb0f secondary"/><g class="dt0cm9dhy primary"><path class="z8df8vb7j"/><path class="yidzp7bkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-star-duo"} {...others} />);
}

export default Component;
