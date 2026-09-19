import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_o20eohb.css';
import '../../css/f/f23s2bc5p.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="p_o20eohb"/><path class="f23s2bc5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:view-filled"} {...others} />);
}

export default Component;
