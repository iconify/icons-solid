import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1yodib9f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w1yodib9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:triangle-round-rectangle"} {...others} />);
}

export default Component;
