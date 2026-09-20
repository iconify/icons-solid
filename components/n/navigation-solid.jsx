import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-6zgrbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-6zgrbnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:navigation-solid"} {...others} />);
}

export default Component;
