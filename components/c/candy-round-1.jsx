import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv16s7lvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yv16s7lvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:candy-round-1"} {...others} />);
}

export default Component;
