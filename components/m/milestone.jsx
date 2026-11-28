import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2x6lxjuo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2x6lxjuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:milestone"} {...others} />);
}

export default Component;
