import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9b1o0b9t.css';
import '../../css/m/mcwbb7b7p.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="w9b1o0b9t"/><path class="mcwbb7b7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:instance-virtual"} {...others} />);
}

export default Component;
