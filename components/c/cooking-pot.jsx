import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a89-7q1nu.css';
import '../../css/m/m87eqxblj.css';
import '../../css/f/fq3ef3b9g.css';
import '../../css/j/j0gmaqmew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a89-7q1nu"/><path class="m87eqxblj"/><path class="fq3ef3b9g"/><path class="j0gmaqmew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cooking-pot"} {...others} />);
}

export default Component;
