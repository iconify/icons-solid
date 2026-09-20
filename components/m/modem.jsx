import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj9nae0yh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yj9nae0yh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:modem"} {...others} />);
}

export default Component;
