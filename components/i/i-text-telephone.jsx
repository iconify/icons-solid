import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwy0kfu6l.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="hwy0kfu6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-text-telephone"} {...others} />);
}

export default Component;
