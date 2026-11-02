import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh4k0b5ns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oh4k0b5ns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:align-vertical-justify-start-line"} {...others} />);
}

export default Component;
