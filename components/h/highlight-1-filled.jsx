import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfvamcckl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tfvamcckl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:highlight-1-filled"} {...others} />);
}

export default Component;
