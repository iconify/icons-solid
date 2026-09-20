import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn4z48ype.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cn4z48ype"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:rail-symbol"} {...others} />);
}

export default Component;
