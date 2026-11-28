import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khl0h4dia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="khl0h4dia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-star-solid"} {...others} />);
}

export default Component;
