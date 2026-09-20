import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnetsu-me.css';
import '../../css/j/j7goiubdd.css';

const viewBox = {"width":576,"height":619};
const content = `<path class="vnetsu-me"/><path class="j7goiubdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:orildo"} {...others} />);
}

export default Component;
