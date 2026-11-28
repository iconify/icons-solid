import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhascub7w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/b/b4su85bjf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary xhascub7w"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="b4su85bjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-diamond-duo"} {...others} />);
}

export default Component;
