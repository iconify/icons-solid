import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr8e64lzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nr8e64lzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:home-check-solid"} {...others} />);
}

export default Component;
