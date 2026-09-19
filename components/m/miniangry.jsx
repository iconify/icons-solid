import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8r3cvk8p.css';

const viewBox = {"width":1024,"height":897};
const content = `<path class="o8r3cvk8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:miniangry"} {...others} />);
}

export default Component;
