import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jl645lb9f.css';
import '../../css/f/fv8oh4bhj.css';
import '../../css/g/gqgoc3zwf.css';
import '../../css/v/v40rh9biz.css';
import '../../css/r/r5ne6zgrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jl645lb9f"/><path class="fv8oh4bhj"/><path class="gqgoc3zwf"/><path class="v40rh9biz"/><path class="r5ne6zgrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ferry"} {...others} />);
}

export default Component;
