import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s2lgbubcc.css';
import '../../css/r/rq1xk5kyb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s2lgbubcc"/><path class="rq1xk5kyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:routing5"} {...others} />);
}

export default Component;
