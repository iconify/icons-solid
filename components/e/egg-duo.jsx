import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whq2bz03s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bajt83jld.css';
import '../../css/z/zqedzh64t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary whq2bz03s"/><g class="dt0cm9dhy primary"><path class="bajt83jld"/><path class="zqedzh64t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:egg-duo"} {...others} />);
}

export default Component;
