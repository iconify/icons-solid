import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsznj30xt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qsznj30xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:plug-2"} {...others} />);
}

export default Component;
