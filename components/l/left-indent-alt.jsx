import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r89p1bbjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r89p1bbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:left-indent-alt"} {...others} />);
}

export default Component;
