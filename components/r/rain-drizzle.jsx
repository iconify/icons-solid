import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1j879b-l.css';
import '../../css/p/pg468fg1k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a1j879b-l"/><path class="pg468fg1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rain-drizzle"} {...others} />);
}

export default Component;
