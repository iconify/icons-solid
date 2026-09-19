import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n79oo2g7g.css';
import '../../css/g/g9bey28zn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n79oo2g7g"/><path class="g9bey28zn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:ethereum-circle"} {...others} />);
}

export default Component;
