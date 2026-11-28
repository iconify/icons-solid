import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfqz4bcsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dfqz4bcsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:folder-refresh"} {...others} />);
}

export default Component;
