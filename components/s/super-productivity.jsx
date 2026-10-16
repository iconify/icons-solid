import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dinz6tf1u.css';
import '../../css/y/y5-o4cbgb.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="dinz6tf1u"/><path class="y5-o4cbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:super-productivity"} {...others} />);
}

export default Component;
