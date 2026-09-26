import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q268_fbou.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q268_fbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-top-right-outline"} {...others} />);
}

export default Component;
