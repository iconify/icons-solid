import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q__-3obnv.css';

const viewBox = {"width":1024,"height":1013};
const content = `<path class="q__-3obnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:technorati"} {...others} />);
}

export default Component;
