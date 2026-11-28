import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mnkxd3b9o.css';
import '../../css/a/a_d29mp8e.css';
import '../../css/r/rxfs97xjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mnkxd3b9o"/><path class="a_d29mp8e"/><path class="rxfs97xjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pancakes"} {...others} />);
}

export default Component;
