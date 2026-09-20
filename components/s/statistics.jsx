import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh3x8-bqk.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="wh3x8-bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:statistics"} {...others} />);
}

export default Component;
