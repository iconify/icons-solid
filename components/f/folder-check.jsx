import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/redq9pfak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="redq9pfak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-check"} {...others} />);
}

export default Component;
