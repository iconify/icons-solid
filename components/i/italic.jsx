import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sl57sbcqw.css';
import '../../css/t/tf9x9gbzg.css';
import '../../css/u/u5tnh3nzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="sl57sbcqw"/><path class="tf9x9gbzg"/><path class="u5tnh3nzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:italic"} {...others} />);
}

export default Component;
