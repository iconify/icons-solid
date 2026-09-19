import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjwhhhtch.css';
import '../../css/j/j4m9ayhmg.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="xjwhhhtch"/><path class="j4m9ayhmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:torsos-female-male"} {...others} />);
}

export default Component;
