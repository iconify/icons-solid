import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccnh3bckv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ccnh3bckv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bottle-outline"} {...others} />);
}

export default Component;
