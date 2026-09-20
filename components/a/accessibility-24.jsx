import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twg_8sizo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="twg_8sizo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:accessibility-24"} {...others} />);
}

export default Component;
