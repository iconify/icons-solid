import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsh5-wo2m.css';

const viewBox = {"width":524,"height":797};
const content = `<path class="bsh5-wo2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:underscore"} {...others} />);
}

export default Component;
