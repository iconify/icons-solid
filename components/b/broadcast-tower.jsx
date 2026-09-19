import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pob-uk1-m.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="pob-uk1-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:broadcast-tower"} {...others} />);
}

export default Component;
