import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuf4w3bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yuf4w3bjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:shield-alert"} {...others} />);
}

export default Component;
