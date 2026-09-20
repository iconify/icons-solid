import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n98cmlxqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n98cmlxqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-right-circle-solid"} {...others} />);
}

export default Component;
