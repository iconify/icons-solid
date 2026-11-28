import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3qtmlbir.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dvazkxb4v.css';
import '../../css/v/vowmmibye.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary t3qtmlbir"/><g class="dt0cm9dhy primary"><path class="dvazkxb4v"/><path class="vowmmibye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bomb-duo"} {...others} />);
}

export default Component;
