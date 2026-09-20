import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/b1030dbjw.css';
import '../../css/f/fnevsimcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="b1030dbjw"/><path class="fnevsimcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:rain-umbrella-sun"} {...others} />);
}

export default Component;
