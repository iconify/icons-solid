import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soofdccjt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o8acivbsi.css';
import '../../css/j/jzhyz-p4o.css';
import '../../css/j/j98qpqarz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary soofdccjt"/><g class="dt0cm9dhy primary"><path class="o8acivbsi"/><path class="jzhyz-p4o"/><path class="j98qpqarz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:text-search-duo"} {...others} />);
}

export default Component;
