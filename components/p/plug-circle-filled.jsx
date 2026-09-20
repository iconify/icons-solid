import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9hdb2ygu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9hdb2ygu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:plug-circle-filled"} {...others} />);
}

export default Component;
