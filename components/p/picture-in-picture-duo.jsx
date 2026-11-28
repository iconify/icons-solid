import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djy0icb9y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c4tsdsd3z.css';
import '../../css/o/o1ow3qbig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djy0icb9y secondary"/><g class="dt0cm9dhy primary"><path class="c4tsdsd3z"/><path class="o1ow3qbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:picture-in-picture-duo"} {...others} />);
}

export default Component;
