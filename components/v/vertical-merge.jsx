import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9lz5abtd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g9lz5abtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:vertical-merge"} {...others} />);
}

export default Component;
